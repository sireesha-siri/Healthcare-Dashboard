import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src='/assets/images/logo.png'/>
        </div>

        <nav className="header-nav">
          <a href="#" className="nav-item">
            <img src='/assets/icons/home.png'width="17" height="18"/>
            <span>Overview</span>
          </a>
          <a href="#" className="nav-item active">
            <img src='/assets/icons/group.png'width="17" height="18"/>
            <span>Patients</span>
          </a>
          <a href="#" className="nav-item">
            <img src='/assets/icons/calender.png'width="17" height="18"/>
            <span>Schedule</span>
          </a>
          <a href="#" className="nav-item">
            <img src='/assets/icons/chat_bubble.png'width="17" height="18"/>
            <span>Message</span>
          </a>
          <a href="#" className="nav-item">
            <img src='/assets/icons/credit_card.png'width="17" height="18"/>
            <span>Transactions</span>
          </a>
        </nav>

        <div className="header-profile">
          <div className="profile-info">
            <img 
              src="/assets/doctor/dr-jose-simmons.png" 
              alt="Dr. Jose Simmons" 
              className="profile-avatar"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />

            <div className="detail-info">
            <span className="profile-name">Dr. Jose Simmons</span>
              <span className="profile-role">General Practitioner</span>
          </div>
          </div>
          <div className="header-divider"></div>
          <button className="settings-button" aria-label="Settings">
            <img src='/assets/icons/settings.png'width="17" height="18"/>
          </button>
          <button className="more-button" aria-label="More options">
            <img src='/assets/icons/more_vert.png'width="4" height="5"/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;