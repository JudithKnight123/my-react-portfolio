// HomePage.js
import React from 'react';
import Masonry from '../components/Masonry';
import LiquidEther from '../components/LiquidEther';

import group1 from '../assets/Group1.png';
import group2 from '../assets/Group2.png';
import group3 from '../assets/Group3.png';
import group4 from '../assets/Group4.png';
import group5 from '../assets/Group5.png';
import group6 from '../assets/Group6.png';
import group7 from '../assets/Group7.png';
import group8 from '../assets/Group8.png';

const items = [
   {
  id: "1",
  img: group1,
  url: "https://github.com/JudithKnight123/my-bootcamp-portfolio",
  height: 600,
},
{
  id: "2",
  img: group2,
  url: "https://github.com/JudithKnight123/my-bootcamp-portfolio",
  height: 800,
},
{
  id: "4",
  img: group4,
  url: "https://github.com/JudithKnight123/my-bootcamp-portfolio",
  height: 600,
},
{
  id: "3",
  img: group3,
  url: "https://github.com/JudithKnight123/my-bootcamp-portfolio",
  height: 800,
},
{
  id: "7",
  img: group7,
  url: "https://github.com/JudithKnight123/full-stack-notes-app",
  height: 800,
},
{
  id: "6",
  img: group6,
  url: "https://github.com/JudithKnight123/python-readme-generator",
  height: 800,
},
{
  id: "8",
  img: group8,
  url: "https://github.com/JudithKnight123/full-stack-blog-application",
  height: 600,
},
{
  id: "5",
  img: group5,
  url: "https://github.com/rrana5106/geeks-unleashed",
  height: 600,
},
    // ... more items
];


const HomePage = () => {
  return (
<>
      <LiquidEther
        colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
        mouseForce={20}
        cursorSize={100}
        isViscous
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        color0="#5227FF"
        color1="#FF9FFC"
        color2="#B497CF"
    />
    <div className="Center">
          <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
      </div>
      </>
  );
};

export default HomePage;
