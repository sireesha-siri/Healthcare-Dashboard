import './DiagnosticList.css';

const DiagnosticList = ({ patient }) => {
  if (!patient || !patient.diagnostic_list) {
    return null;
  }

  const getStatusColor = (status) => {
    const statusMap = {
      'Under Observation': 'var(--color-accent-pink-light)',
      'Cured': 'var(--color-accent-green-light)',
      'Inactive': 'var(--color-accent-purple-light)'
    };
    return statusMap[status] || 'var(--color-bg-primary)';
  };

  return (
    <div className="diagnostic-list-container">
      <div className="diagnostic-list-header">
        <h2>Diagnostic List</h2>
      </div>

      <div className="diagnostic-table">
        <div className="table-header">
          <div className="table-col col-problem">Problem/Diagnosis</div>
          <div className="table-col col-description">Description</div>
          <div className="table-col col-status">Status</div>
        </div>

        <div className="table-body">
          {patient.diagnostic_list.map((item, index) => (
            <div key={index} className="table-row">
              <div className="table-col col-problem">{item.name}</div>
              <div className="table-col col-description">{item.description}</div>
              <div className="table-col col-status">
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(item.status) }}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;