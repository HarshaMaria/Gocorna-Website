import React from 'react';
import Rectangle22 from '../assets/Rectangle22.svg';
import Group42 from '../assets/Group42.svg';
import Group43 from '../assets/Group43.svg';
import Group45 from '../assets/Group45.svg';
import Block1 from '../assets/Block1.svg';
import Block2 from '../assets/Block2.svg';
import Block3 from '../assets/Block3.svg';
import Block4 from '../assets/Block4.svg';
import Image1 from '../assets/Image1.svg';
import Image2 from '../assets/Image2.svg';
import './Part4.css';

function Part4() {
  return (
   <div className="part4full">
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
    <div className="gp">
     <img className="block1" src={Block1} alt="Block1" />
     <img className="block2" src={Block2} alt="Block2" />
     <img className="block3" src={Block3} alt="Block3" />
     <img className="block4" src={Block4} alt="Block4" />   
    </div>
    <div>
    <img src={Image1} alt="Image1" className="image1" />
    <img src={Image2} alt="Image2" className="image2" />    
    </div> 
   </div>  
  );
}

export default Part4;

