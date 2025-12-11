import './LabResults.css';

const LabResults = ({ patient }) => {
  // Use patient's lab_results from API if available, otherwise show empty state
  const labResults = patient?.lab_results || [];

  return (
    <div className="lab-results-container">
      <div className="lab-results-header">
        <h2>Lab Results</h2>
      </div>

      <div className="lab-results-list">
        {labResults.length > 0 ? (
          labResults.map((result, index) => (
            <div key={index} className="lab-result-item">
              <span className="result-name">{result}</span>
              <button className="download-button" aria-label={`Download ${result}`}>
                <img src='/assets/icons/download.png'width="17" height="18"/>
              </button>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No lab results available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LabResults;