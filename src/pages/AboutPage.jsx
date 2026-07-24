// HomePage.js
import React from 'react';
// import '../components/GlowingCard.css';
import SoftAurora from '../components/SoftAurora';
import TextType from '../components/TextType';
import GridBox from '../components/GridBox';

const HomePage = () => {
  return (

    <div className="aboutMeMain">
          <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      {/* Example 2: Customized speed and characters */}
        <TextType 
          as="h2"
          text={["Hello I'm Judi!", "I design and build functional components for big brands!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
        />
      <p>I make functional digital designs, animations and emails for big brands!</p>
    
    <div className='ArrangeBoxes'>
      
      <GridBox 
      heading="Project One" 
      description="A short summary of the project." 
      />
      <GridBox 
      heading="Project One" 
      description="A short summary of the project." 
      />

    </div>
    
    
    </div>
  );
};

export default HomePage;
