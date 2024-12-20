import './app.css';

const WhyChooseWorkHive = () => {
  return (
    <div className="container">
      <h1>
        Why choose Work<span className="highlight">Hive</span> ?
      </h1>
      <div className="features">
        {/* Feature 1 */}
        <div className="feature">
          <div className="bubble bubble-1">1</div>
          <h2>Completely Free Platform</h2>
          <p>
            No bidding fees, no charges—WorkHive helps freelancers and clients
            connect free of hidden costs.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature">
          <div className="bubble bubble-2">2</div>
          <h2>For Everyone, Everywhere</h2>
          <p>
            Whether you're a beginner or an expert, WorkHive supports freelancers
            at all skill levels.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature">
          <div className="bubble bubble-3">3</div>
          <h2>Trusted and Supported</h2>
          <p>
            Work with verified freelancers and enjoy 24/7 support for a secure
            experience.
          </p>
        </div>
      </div>
      <button className="cta-button">Ready to grow ? Join us</button>
    </div>
  );
};

const HowEasySection = () => {
  return (
    <div className="how-easy-container">
      <h1>
        How Easy Is It to Use Work<span className="highlight-green">Hive</span>?
      </h1>
      <div className="how-easy-content">
        <div className="points">
          <div className="point">
            <div className="checkmark">✔</div>
            <div>
            <h2>Effortless Matchmaking: Say Goodbye to Confusion</h2>
            <p>
              Smart, intuitive features help you find the perfect opportunities without the hassle.
            </p>
            </div>
            
          </div>
          <div className="point">
            <div className="checkmark">✔</div>
            <div>
            <h2>Tailored for Success: Verified Matches Made Easy</h2>
            <p>
              We handpick and connect you with the best freelancers and clients, ensuring trust and quality.
            </p>
            </div>
            
          </div>
          <div className="point">
            <div className="checkmark">✔</div>
            <div>
              <h2>Freedom to Freelance: No Fees, No Limits</h2>
              <p>
                WorkHive is a completely free platform, breaking barriers to kickstart your journey.
              </p>
            </div>
            
          </div>
        </div>

        <div className="illustration">
            <img
              src="src\assets\WhatsApp Image 2024-12-20 at 16.41.01_92759b86.jpg"
              alt="Illustration"
              className="illustration-image"
            ></img>
        </div>
      </div>
      <div className = "green-but">
      <button className="cta-button green-button">See How workhive works</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <WhyChooseWorkHive />
      <HowEasySection />
    </div>
  );
}

export default App;
