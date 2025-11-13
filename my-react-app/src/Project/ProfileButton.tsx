import './ProfileButton.css'

const ProfileButton = () => {
  return (
    <div className="Profile-button-container">
      <div className="profile-base">
        <div className="layer"></div>
        <div className="light"></div>
        <div className="glass"></div>
        <div className="profile-content">
          <button className="profile-letter">A</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileButton