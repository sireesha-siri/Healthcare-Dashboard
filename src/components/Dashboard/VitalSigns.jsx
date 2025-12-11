import './VitalSigns.css';

const VitalSigns = ({ readings }) => {
  return (
    <div className="vital-signs">
      <div 
        className="vital-card respiratory"
      >
        <div className="vital-icon">
          <img src="/assets/images/respiratory_rate.png" width="96" height="96" />
        </div>
        <div className="vital-info">
          <span className="vital-label">Respiratory Rate</span>
          <span className="vital-value">{readings.respiratoryRate.value} bpm</span>
          <span className="vital-status">{readings.respiratoryRate.levels}</span>
        </div>
      </div>

      <div 
        className="vital-card temperature"  
      >
        <div className="vital-icon">
          <img src="/assets/images/temperature.png" width="96" height="96" />
        </div>
        <div className="vital-info">
          <span className="vital-label">Temperature</span>
          <span className="vital-value">{readings.temperature.value}°F</span>
          <span className="vital-status">{readings.temperature.levels}</span>
        </div>
      </div>

      <div 
        className="vital-card heartrate"  
      >
        <div className="vital-icon">
          <img src="/assets/images/HeartBPM.png" width="96" height="96" />
        </div>
        <div className="vital-info">
          <span className="vital-label">Heart Rate</span>
          <span className="vital-value">{readings.heartRate.value} bpm</span>
          <span className="vital-status">
            <img src='/assets/icons/ArrowDown.png'width="10" height="10"/>
            {readings.heartRate.levels}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VitalSigns;