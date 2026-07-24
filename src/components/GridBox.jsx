import React from 'react'
import './GridBox.css';

const GridBox = ({ heading, description }) => {

  return (
      <div className='ThisIsABox'>

    <div className="glow-card">
    <div className="glow-card-inner">
          <h2>{heading}</h2>
          <p>{description}</p>
      </div>
    </div>
    
    </div>
  )
}

export default GridBox