import './index.css';

// Helper function to calculate age from date of birth
const calculateAge = (dateOfBirth) => {
  if (!dateOfBirth) return null;
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const PatientList = ({ patients, selectedPatient, onSelectPatient }) => {
  return (
    <div className="patient-list-container">
      <div className="patient-list-header">
        <h2>Patients</h2>
        <button className="search-button" aria-label="Search patients">
          <img src='/assets/icons/search.png'width="17" height="18"/>
        </button>
      </div>

      <div className="patient-list">
        {patients.map((patient, index) => (
          <div
            key={index}
            className={`patient-item ${selectedPatient?.name === patient.name ? 'active' : ''}`}
            onClick={() => onSelectPatient(patient)}
          >
            <div className="patient-avatar">
              <img
                src={`/assets/images/patients/${(patient.name || '').toLowerCase().replace(/\s+/g, '-')}.png`}
                alt={patient.name || 'Patient'}
              />
            </div>
            <div className="patient-info">
              <span className="patient-name">{patient.name || 'Unknown Patient'}</span>
              <span className="patient-details">
                {patient.gender || 'N/A'}, {patient.age || (patient.date_of_birth ? calculateAge(patient.date_of_birth) : 'N/A')}
              </span>
            </div>
            <button className="patient-menu" aria-label="More options">
              <img src='/assets/icons/more_horiz.png'width="17" height="18"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;