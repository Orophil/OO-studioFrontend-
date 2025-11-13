import './Statcard4.css';

const Statcard4 = () => {
  return (
    <div className="statcard4-container">
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
          <button className="statcard4-button">Explore</button>
        </div>
      </div>
      <div className="statcard4-image">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop"
          alt="Epic movie scene"
        />
      </div>
    </div>
  )
}

export default Statcard4;