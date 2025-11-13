import './ExploreButton.css'
const ExploreButton = () => {
  return (
    <button className="glass-explore-btn">
      <div className="glass-explore">
        <div className="explore-fill" />
        <div className="frame" />
        <div className="explore-container">
          <span className="explore-label">Explore</span>
        </div>
      </div>
    </button>
  );
};

export default ExploreButton;
