import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Toggle the showText state every 2 seconds
    const interval = setInterval(() => {
      setShowText((prevShowText) => !prevShowText);
    }, 2000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="flex items-center p-10">
      <div className="left-banner text-center">
        {/* Use the "showText" state to conditionally render the text */}
        {showText && (
          <div className="mb-4">
            Hi, I'm <span style={{ color: '#ff014f', fontSize: '36px' }}>Deepinder Kaur Warya</span>
          </div>
        )}

        <div className="mb-4">
          a <span className="text-designColor">Full Stack Developer</span>
        </div>

        {/* Move "Find me on" above the social links */}
        <div className="text-xl mt-4">FIND ME ON:</div>
        <div className="social-links">
          <a href="https://github.com/waryad" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/deepinderw" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="right-banner">
        <img
          className="profile-pic"
          src="../../image/Mypic.jpg" // Update the path to your resized image
          alt="Your"
        />
      </div>
    </section>
  );
}

export default Home;
