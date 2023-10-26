import React from 'react';
import Rectangle22 from '../assets/Rectangle22.svg';
import Group42 from '../assets/Group42.svg';
import Group43 from '../assets/Group43.svg';
import Group45 from '../assets/Group45.svg';
import './Part4.css';

function Part4() {
  return (
   <div>
    <div className="part4">
      <div className="header1">
        <span className="red-text">Healthcare</span> at your Fingertips.
      </div>
        <p1>
          Bringing premium healthcare features to your fingertips. User-friendly mobile platform to <br />
           bring healthcare to your fingertips. Signup and be a part of the new health culture.
        </p1>
    </div>
    <div className="bgroup">
     <div className="image-container">
       <img className="rectangle22" src={Rectangle22} alt="Rectangle22" />
       <img className="group42" src={Group42} alt="Group42" />
     </div>
     <div className="image-container1">
       <img className="rectangle22" src={Rectangle22} alt="Rectangle22" />
       <img className="group43" src={Group43} alt="Group43" />
     </div>
     <div className="image-container2">
       <img className="rectangle22" src={Rectangle22} alt="Rectangle22" />
       <img className="group45" src={Group45} alt="Group45" />
     </div>
    </div> 
   </div>  
  );
}

export default Part4;
