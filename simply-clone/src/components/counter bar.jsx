import React from "react";
import CountUp from "react-countup";
import "../assets/css/CounterBar.css";

const ConstructionSection = () => {
  return (
    <section className="construction-section">
      <div className="content-wrapper">
        {/* Left Side - Overlapping Images */}
        <div className="image-container">
          <img
            src="images/4.jpg"
            alt="Construction Work 1"
            className="image image-main"
          />
          <img
            src="images/1.jpg"
            alt="Construction Work 2"
            className="image image-secondary"
          />
        </div>

        {/* Right Side - Text and Counter */}
        <div className="text-and-counter">
          <div className="text-content">
            <h2>
              # BEST <span>CONSTRUCTION</span> THEME
            </h2>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble.
            </p>
            <button className="btn-buy">BUY NOW</button>
          </div>
          <div className="counter-bar">
            <div className="counter-item">
              <h2>
                <CountUp start={0} end={598} duration={2} />
              </h2>
              <p>PROJECTS</p>
            </div>
            <div className="counter-item">
              <h2>
                <CountUp start={0} end={128} duration={2} />
              </h2>
              <p>CLIENTS</p>
            </div>
            <div className="counter-item">
              <h2>
                <CountUp start={0} end={339} duration={2} />
              </h2>
              <p>SUCCESS</p>
            </div>
            <div className="counter-item">
              <h2>
                <CountUp start={0} end={109} duration={2} />
              </h2>
              <p>AWARDS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;
