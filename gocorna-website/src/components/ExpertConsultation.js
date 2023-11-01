import React from 'react';
import Group28 from '../assets/Group28.svg';
import Group20 from '../assets/Group20.svg';
import Rectangle21 from '../assets/Rectangle21.svg';
import Group15 from '../assets/Group15.svg';
import Group23Icon from '../assets/Group23Icon.svg';
import './ExpertConsultation.css';


function ExpertConsultation() {
    return (
    <div className="part3">
      <div className="img-block">
       <div className="img1"> 
        <img src={Group28} alt="Group 28"></img>
       </div>
       <div className="img2">
        <img src={Group20} alt="Group 20"></img>
       </div> 
      </div> 
      <div className="group">
        <div className="box1">
        <h1 className="heading">Talk to <span className="experts">experts.</span></h1>
         <p className="para">Book appointments or submit queries into thousands of forums concerning health issues and prevention <br /> against noval Corona Virus.</p>
        <button className="features-button">
          FEATURES
        </button>
        </div>
       <img className="rectangle21" src={Rectangle21} alt="Rectangle21" />
       <img className="group23Icon" src={Group23Icon} alt="Group23Icon"></img>
       <img className="group15" src={Group15} alt="Group15"></img>
      </div>
    </div>
    );
  }

export default ExpertConsultation;
