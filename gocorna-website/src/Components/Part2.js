import React from 'react';
import './Part2.css';
import Group22 from '../assets/Group22.svg';

function Part2() {
  return (
    <div className="part2">
    <div className="image1"><img src={Group22} alt="Group 22"></img></div>
      <div className="content">
        <h1>Stay safe with Go<span className="corona">Corona.</span></h1>
        <p>24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.</p>
        <button>FEATURES</button> 
      </div> 
    </div>
  );
}

export default Part2;
