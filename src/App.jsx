import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PatientList from './components/Sidebar/PatientList';
import DiagnosisHistory from './components/Dashboard/DiagnosisHistory';
import DiagnosticList from './components/Dashboard/DiagnosticList';
import PatientProfile from './components/Dashboard/PatientProfile';
import LabResults from './components/Dashboard/LabResults';
import { fetchPatientsData } from './services/api';
import { TARGET_PATIENT } from './utils/constants';

function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPatientsData();
  }, []);

  const loadPatientsData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await fetchPatientsData();
      
      // Ensure data is an array
      if (!Array.isArray(data)) {
        console.error('Expected array but got:', typeof data, data);
        setError('Invalid data format received from API');
        return;
      }
      
      setPatients(data);
      
      // Find and set Jessica Taylor as the selected patient (case-insensitive match)
      const jessicaTaylor = data.find(p => 
        p.name && p.name.trim().toLowerCase() === TARGET_PATIENT.toLowerCase()
      );
      
      if (jessicaTaylor) {
        setSelectedPatient(jessicaTaylor);
      } else {
        // Don't set error, just log it - allow user to select manually
        console.warn(`${TARGET_PATIENT} not found in patient data. Available patients:`, 
          data.map(p => p.name).join(', '));
        // Set first patient as selected if available
        if (data.length > 0) {
          setSelectedPatient(data[0]);
        }
      }
    } catch (err) {
      setError('Failed to load patient data. Please check your connection and try again.');
      console.error('Error loading patients:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="app-loading">
        <div className="loading-spinner"></div>
        <p>Loading patient data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-error">
        <div className="error-content">
          <h2>Error Loading Dashboard</h2>
          <p>{error}</p>
          <button onClick={loadPatientsData} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      
      <div className="app-content">
        <aside className="sidebar">
          <PatientList 
            patients={patients} 
            selectedPatient={selectedPatient}
            onSelectPatient={setSelectedPatient}
          />
        </aside>

        <main className="main-content">
          <div className="dashboard-grid">
            <div className="dashboard-left">
              <DiagnosisHistory patient={selectedPatient} />
              <DiagnosticList patient={selectedPatient} />
            </div>

            <div className="dashboard-right">
              <PatientProfile patient={selectedPatient} />
              <LabResults patient={selectedPatient} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;