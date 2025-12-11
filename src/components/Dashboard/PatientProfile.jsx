import './PatientProfile.css';

const PatientProfile = ({ patient }) => {
  if (!patient) {
    return null;
  }

  return (
    <div className="patient-profile-container">
      <div className="profile-avatar-section">
        <img
          src={`/assets/images/pictures/${(patient.name || '').toLowerCase().replace(/\s+/g, '-')}.png`}
          alt={patient.name || 'Patient'}
          className="profile-avatar-large"
        />
        <h2 className="profile-name">{patient.name || 'Unknown Patient'}</h2>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <div className="detail-icon">
            <img src='/assets/icons/BirthIcon.png'width="70" height="70"/>
          </div>
          <div className="detail-info">
            <span className="detail-label">Date Of Birth</span>
            <span className="detail-value">{patient.date_of_birth || 'N/A'}</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            {patient.gender === 'Female' ? 
            <img src='/assets/icons/FemaleIcon.png'width="70" height="70"/> :
            <img src='/assets/icons/MaleIcon.png'width="70" height="70"/>}
          </div>
          <div className="detail-info">
            <span className="detail-label">Gender</span>
            <span className="detail-value">{patient.gender || 'N/A'}</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <img src='/assets/icons/PhoneIcon.png'width="70" height="70"/>
          </div>
          <div className="detail-info">
            <span className="detail-label">Contact Info</span>
            <span className="detail-value">{patient.phone_number || 'N/A'}</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <img src='/assets/icons/PhoneIcon.png'width="70" height="70"/>
          </div>
          <div className="detail-info">
            <span className="detail-label">Emergency Contacts</span>
            <span className="detail-value">{patient.emergency_contact || 'N/A'}</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <img src='/assets/icons/InsuranceIcon.png'width="70" height="70"/>
          </div>
          <div className="detail-info">
            <span className="detail-label">Insurance Provider</span>
            <span className="detail-value">{patient.insurance_type || 'N/A'}</span>
          </div>
        </div>
      </div>

      <button className="show-all-button">Show All Information</button>
    </div>
  );
};

export default PatientProfile;