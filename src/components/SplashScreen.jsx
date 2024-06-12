import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="splash-screen">
        <h1>JENVER</h1>
      </div>
    )
  );
}

export default SplashScreen;
