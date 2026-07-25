// HomePage.js
import React from 'react';
import TextType from '../components/TextType';
import GridBox from '../components/GridBox';
import SoftAurora from '../components/SoftAurora';

const HomePage = () => {
  return (

    <div className="SkillsMain">
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
          text={["Hello I'm Judi!", "I design and build functional components!"]}
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
      
      <div className='ArrangeBoxes'>
      <GridBox 
      heading="JavaScript" 
      description="Core language — ES6+, async logic, DOM manipulation." 
      />
      <GridBox 
      heading="Node.js" 
      description="Server-side JS — building and running backend logic." 
      />
      <GridBox 
      heading="React" 
      description="Component-based UI, hooks, state management." 
      />
      <GridBox 
      heading="HTML" 
      description="Semantic markup, accessible page structure." 
      />
      <GridBox 
      heading="CSS" 
      description="Layout, responsive design, styling from scratch." 
      />
      <GridBox 
      heading="Tailwind CSS" 
      description="Utility-first styling, picked up on the bootcamp." 
      />
      <GridBox 
      heading="JSON" 
      description="Structuring and parsing data between client and server." 
      />
      <GridBox 
      heading="REST APIs" 
      description="Building and consuming endpoints, request/response cycles." 
      />
      <GridBox 
      heading="Python" 
      description="Scripting and general-purpose programming basics." 
      />
      <GridBox 
      heading="TypeScript" 
      description="Learning now — typed JavaScript, building on React fundamentals." 
      />
</div>
     
    
    
    </div>
  );
};

export default HomePage;
