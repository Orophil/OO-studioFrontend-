import "./Statcard.css";
import storage from "../../assets/Image.svg";
const Statcard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="bouncelight"></div>
        <div className="card-content">
          <div className="stat-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M15.1515 8.15851H24.4755M24.4755 8.15851V17.4825M24.4755 8.15851L15.1515 17.4825L10.4895 12.8205L3.49649 19.8135"
                stroke="white"
                stroke-width="2.331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="trend-text">+12% this month</span>
          </div>

          <div className="card-image">
            <img src={storage} alt="Storage device" />
          </div>
          <div className="stat-info ">
            <p className="stat-label">Storage Used</p>
            <h2 className="stat-value">
              847GB
              <span className="stat-total">/1TB</span>
            </h2>
            <div className="stat-progress-bar">
              <div
                className="stat-progress-fill"
                style={{ width: "84.7%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statcard;
