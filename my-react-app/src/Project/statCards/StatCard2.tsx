import "./StatCard2.css";
import bitcoin from "../../assets/image 97.svg";
const StatCard2 = () => {
  return (
    <div className="card2-container">
      <div className="card2">
        <div className="bouncelight2"></div>
        <div className="container">
        <div className="stat2-card">
          <div className="trend-indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <path
                d="M15.2188 8.19475H24.5842M24.5842 8.19475V17.5602M24.5842 8.19475L15.2188 17.5602L10.5361 12.8775L3.51202 19.9015"
                stroke="black"
                stroke-opacity="0.7"
                stroke-width="2.34136"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-black/70 text-right font-['IBM_Plex_Sans'] text-[14.048px] font-normal leading-[20.487px]">
              -5% this month
            </span>
          </div>

          <div className="balance-section">
            <h3 className="balance-title">Credits Balance</h3>
            <div className="balance-amount">
              <span className="amount">12,847</span>
              <span className="amount-label">
                Premium
                <br />
                credits
              </span>
            </div>
          </div>

          <button className="create-project-btn">Create Project</button>
        </div>

        <div className="coin-icon">
          <div className="bitcoin-coin">
            <img src={bitcoin} alt="bit coin" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard2;
