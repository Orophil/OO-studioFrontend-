import './Statcard4.css';
import movieimage from '../../assets/image 72.svg'
import ExploreButton from '../ExploreButton';
const Statcard4 = () => {
  return (
    <div className="statcard4-outer-container">
      <div className="statcard4-container">
        {/* Bounce light effect */}
        <div className="bouncelight4" />
        <div className="statcard4-content">
          <div className="statcard4-text">
            <h1 className="statcard4-title">
              Sonus DUB<br />
              Breaks Barriers
            </h1>
            <p className="statcard4-description">
              The upcoming epic movie<br />
              Kann-appa has harnessed<br />
              OO Studio A1's<br />
              SonusDub...
            </p>
           <ExploreButton/>
           <div></div>
          </div>
        </div>
        <div className="statcard4-image">
          <img
            src={movieimage}
            alt="Epic movie scene"
          />
        </div>
      </div>
    </div>
  )
}

export default Statcard4;