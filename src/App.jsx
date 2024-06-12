import Header from './components/header.jsx'
import AboutMe from './components/aboutMe.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isAppVisible, setIsAppVisible] = useState(false); // State to control app visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
      setIsAppVisible(true); // Show the app content after the splash screen fades out
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return(
    <>
      {isSplashVisible && <SplashScreen />}
      {isAppVisible && (
        <div className="fade-in">
          <Header />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App
