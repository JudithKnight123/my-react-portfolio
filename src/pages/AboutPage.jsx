// HomePage.js
import React from 'react';
import './AboutPage.css';
import Particles from '../components/Particles';

const HomePage = () => {
  return (
<>
  <Particles
    particleColors={["#ffffff"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover
    alphaParticles={false}
    disableRotation={false}
    pixelRatio={1}
/>

  <div className="about">
  <div className="about-badge">
<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
  <path d="M5,20 V5 H20 M80,5 H95 V20 M95,80 V95 H80 M20,95 H5 V80 M22,38 H78 V74 H22 Z M40,30 H60 V38 H40 Z M35,56 A15,15 0 1 0 65,56 A15,15 0 1 0 35,56"/>
</svg>
  </div>
  
      <p className="about-top">UX/UI Designer & Developer</p>
      <h1>I love builds <em>with</em> creative tools!</h1>
      <p className="about-sub">
        I’m a multidisciplinary designer and developer who specializes in building brands that are both beautifully designed and impeccably coded. 
      </p>
    </div>
    </>
  );
};

export default HomePage;
