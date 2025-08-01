import React, { useEffect, useState } from 'react';
import './LandingPage.css';

function LandingPage({ onEnter }) {
  const [openCurtains, setOpenCurtains] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showEnter, setShowEnter] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpenCurtains(true), 100);
    // Animate "Welcome" after curtain opens
    setTimeout(() => setShowWelcome(true), 2000);

    // Animate "Enter the Canteen" after 1s of "Welcome"
    setTimeout(() => setShowEnter(true), 3000);
  }, []);

  return (
    <div className="landing-container">
      <div className={`curtain left ${openCurtains ? 'open' : ''}`}></div>
      <div className={`curtain right ${openCurtains ? 'open' : ''}`}></div>

      <div className="text-container-wrapper">
        <div className={`text-line ${showWelcome ? 'visible' : ''}`}>
          <h1>Welcome</h1>
        </div>

        <div
        className={`text-line ${showEnter ? 'visible' : ''}`}
        style={{ cursor: 'pointer' }}
        onClick={onEnter}
        >
        <h2>Enter the Canteen</h2>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
