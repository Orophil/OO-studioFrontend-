import "./StatCard3.css";
import file from "../../assets/image 95 (1).svg";

const Statcard3 = () => {
  return (
    <div className="card3-container">
      <div className="card3">
        <div className="card3-content">
          {/* soft inner highlight */}
          <div className="bouncelight" />

          {/* top row */}
          <div className="stat3-top">
            <div className="stat3-top-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M3.01331 7.03111V17.0756C3.01331 18.185 3.91272 19.0844 5.02219 19.0844H19.0844C20.1939 19.0844 21.0933 18.185 21.0933 17.0756V9.04C21.0933 7.93052 20.1939 7.03111 19.0844 7.03111H13.0578L11.0489 5.02222H5.02219C3.91272 5.02222 3.01331 5.92163 3.01331 7.03111Z"
                  stroke="white"
                  strokeWidth="2.00889"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="stat3-top-text">8 in review</span>
            </div>
          </div>

          {/* bottom text */}
          <div className="stat3-bottom">
            <p className="stat3-label">Active Projects</p>
            <div className="stat3-count-row">
              <span className="stat-glasseffect3">24</span>
              <span className="stat3-subtext">across 3 teams</span>
            </div>
          </div>

          {/* folder illustration */}
          <img src={file} alt="file" className="stat3-illustration" />
        </div>
      </div>
    </div>
  );
};

export default Statcard3;
