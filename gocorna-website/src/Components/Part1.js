import React from 'react';
import './Part1.css';
import Icon from '../assets/Group 1.svg';
import Group23 from '../assets/Group 23.svg';
import Group14 from '../assets/Group 14.svg';
import Rectangle15 from '../assets/Rectangle15.svg';

function Part1() {
  return (
    <div className="part1">
      <header className="header ">
        <img src={Icon} alt="icon" className="icon" />
        <span className="title"><span className="go">Go</span><span className="corona">Corona</span></span>
        <nav className="nav">
          <span>HOME</span>
          <span>FEATURES</span>
          <span>SUPPORT</span>
          <span>CONTACT US</span>
        </nav>
        <button className="download-button">
          DOWNLOAD
        </button>
        <div className="icon-container">
         <img src={Rectangle15} alt="Rectangle 15 icon" className="rectangle-15-icon" />
         <img src={Group14} alt="Group 14 icon" className="group-14-icon" /> 
        </div>
      </header>
      <div className="box">
        <div><h1>Take care of yours family's <span className="health">health.</span></h1></div>
        <p>All in one destination for COVID-19 health queries.
     Consult 10,000+ health workers about your concerns.</p>
        <button className="get-started-button">
          GET STARTED
        </button>
      </div>
      <div className="icon-text-container">
        <img src={Group23} alt="Group 23 icon" className="group-23-icon" />
        <div className="text">
         <p className="text1">Stay safe with GoCorona</p>
         <p className="text2">WATCH VIDEO</p>
        </div>
      </div>
    </div>
  );
}

export default Part1;
