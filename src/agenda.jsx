import React from 'react';
import './index.css';

const WhyChooseWorkHive = () => {
  return (
    <div className="container">
      <h1>
        Why choose <span className="highlight">WorkHive</span> ?
      </h1>
      <div className="features">
        <div className="feature">
          <div className="icon cross-icon">X</div>
          <h2>Completely Free Platform</h2>
          <p>
            No bidding fees, no charges—WorkHive helps freelancers and clients
            connect free of hidden costs.
          </p>
        </div>
        <div className="feature">
          <div className="icon">2</div>
          <h2>For Everyone, Everywhere</h2>
          <p>
            Whether you're a beginner or an expert, WorkHive supports freelancers
            at all skill levels.
          </p>
        </div>
        <div className="feature">
          <div className="icon">3</div>
          <h2>Trusted and Supported</h2>
          <p>
            Work with verified freelancers and enjoy 24/7 support for a secure
            experience.
          </p>
        </div>
      </div>
      <button className="cta-button">Ready to grow? Join us</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <WhyChooseWorkHive />
    </div>
  );
}

export default App;