import React from 'react'
import './GridBox.css';

const GridBox = ({ heading, description }) => {

  return (
    <div className='ThisIsABox'>
        <h2>{heading}</h2>
        <p>{description}</p>
    </div>
  )
}

export default GridBox