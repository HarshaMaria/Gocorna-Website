import React from 'react';
import './SafetyAssurance.css';
import Group22 from '../assets/Group22.svg';

function SafetyAssurance() {
  return (
    <div className="part2">
     <div className="image1"><img src={Group22} alt="Group 22"></img></div>
      <div className="content">
        <h1>Stay safe with <br /> Go<span className="corona">Corona.</span></h1>
        <p>24x7 Support and user friendly mobile platform to bring <br />
           healthcare to your fingertips. Signup and be a part of <br />
            the new health culture.</p>
        <button>FEATURES</button> 
      </div> 
    </div>
  );
}

export default SafetyAssurance;