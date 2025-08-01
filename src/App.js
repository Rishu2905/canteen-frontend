import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {showMain ? (
        <MainPage />
      ) : (
        <LandingPage onEnter={() => setShowMain(true)} />
      )}
    </>
  );
}

export default App;
