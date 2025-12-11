import { useState, useEffect, useCallback } from 'react';
import './DiagnosisHistory.css';
import BloodPressureChart from '../BloodPressureChart/BloodPressureChart';
import VitalSigns from './VitalSigns';

const DiagnosisHistory = ({ patient }) => {
  const [chartData, setChartData] = useState(null);
  const [latestReadings, setLatestReadings] = useState(null);

  const prepareChartData = useCallback(() => {
    if (!patient || !patient.diagnosis_history || !Array.isArray(patient.diagnosis_history)) {
      return;
    }
    
    const history = patient.diagnosis_history;
    
    // Get last 6 months (or all if less than 6)
    const last6Months = history.slice(-6);
    
    // Validate data structure
    if (last6Months.length === 0 || !last6Months[0].blood_pressure) {
      console.warn('Invalid diagnosis history data structure');
      return;
    }
    
    const labels = last6Months.map(entry => {
      if (entry.month && entry.year) {
        return `${entry.month.substring(0, 3)}, ${entry.year}`;
      }
      return 'Unknown';
    });
    
    const systolicData = last6Months.map(entry => 
      entry.blood_pressure?.systolic?.value ?? 0
    );
    
    const diastolicData = last6Months.map(entry => 
      entry.blood_pressure?.diastolic?.value ?? 0
    );

    setChartData({
      labels,
      datasets: [
        {
          label: 'Systolic',
          data: systolicData,
          borderColor: '#E66FD2',
          backgroundColor: 'rgba(230, 111, 210, 0.1)',
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: '#E66FD2',
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2,
        },
        {
          label: 'Diastolic',
          data: diastolicData,
          borderColor: '#8C6FE6',
          backgroundColor: 'rgba(140, 111, 230, 0.1)',
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: '#8C6FE6',
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2,
        }
      ]
    });

    // Set latest readings
    const latest = last6Months[last6Months.length - 1];
    if (latest && latest.blood_pressure) {
      setLatestReadings({
        systolic: latest.blood_pressure.systolic || { value: 0, levels: 'Unknown' },
        diastolic: latest.blood_pressure.diastolic || { value: 0, levels: 'Unknown' },
        respiratoryRate: latest.respiratory_rate || { value: 0, levels: 'Unknown' },
        temperature: latest.temperature || { value: 0, levels: 'Unknown' },
        heartRate: latest.heart_rate || { value: 0, levels: 'Unknown' }
      });
    }
  }, [patient]);

  useEffect(() => {
    if (patient && patient.diagnosis_history && Array.isArray(patient.diagnosis_history) && patient.diagnosis_history.length > 0) {
      prepareChartData();
    } else {
      // Reset chart data if patient or history is missing
      setChartData(null);
      setLatestReadings(null);
    }
  }, [patient, prepareChartData]);

  if (!patient || !chartData) {
    return (
      <div className="diagnosis-history">
        <div className="loading-placeholder">
          <p>Loading diagnosis history...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="diagnosis-history">
      <div className="diagnosis-header">
        <h2>Diagnosis History</h2>
      </div>

      <div className="blood-pressure-section">
        <div className="section-header">
          <h3>Blood Pressure</h3>
          <select className="time-range-select">
            <option value="6months">Last 6 months</option>
            <option value="1year">Last year</option>
            <option value="2years">Last 2 years</option>
          </select>
        </div>

        <div className="chart-container">
          <BloodPressureChart data={chartData} />
        </div>

        <div className="blood-pressure-readings">
          <div className="reading-card systolic">
            <div className="reading-indicator"></div>
            <div className="reading-info">
              <span className="reading-label">Systolic</span>
              <span className="reading-value">{latestReadings.systolic.value}</span>
              <span className="reading-status">
                <span className={`status-icon ${latestReadings.systolic.levels.toLowerCase().replace(' ', '-')}`}>
                  {latestReadings.systolic.levels === 'Higher than Average' ? 
                  <img src='/assets/icons/ArrowUp.png'width="10" height="10"/> :
                  <img src='/assets/icons/ArrowDown.png'width="10" height="10"/> 
                  }
                </span>
                {latestReadings.systolic.levels}
              </span>
            </div>
          </div>

          <div className="reading-divider"></div>

          <div className="reading-card diastolic">
            <div className="reading-indicator"></div>
            <div className="reading-info">
              <span className="reading-label">Diastolic</span>
              <span className="reading-value">{latestReadings.diastolic.value}</span>
              <span className="reading-status">
                <span className={`status-icon ${latestReadings.diastolic.levels.toLowerCase().replace(' ', '-')}`}>
                  {latestReadings.diastolic.levels === 'Lower than Average' ? 
                  <img src='/assets/icons/ArrowUp.png'width="10" height="10"/> :
                  <img src='/assets/icons/ArrowDown.png'width="10" height="10"/> }
                </span>
                {latestReadings.diastolic.levels}
              </span>
            </div>
          </div>
        </div>
      </div>

      {latestReadings && (
        <VitalSigns readings={latestReadings} />
      )}
    </div>
  );
};

export default DiagnosisHistory;