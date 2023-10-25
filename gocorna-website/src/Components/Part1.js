import React from 'react';
import './Part1.css';
import Icon from '../assets/Group 1.svg';

function Part1() {
  return (
    <div>
      <header className="header">
        <img src={Icon} alt="icon" className="icon" />
        <span className="title"><span className="go">Go</span><span className="corona">Corona</span></span>
        <nav>
          <span>HOME</span>
          <span>FEATURES</span>
          <span>SUPPORT</span>
          <span>CONTACT US</span>
        </nav>
        <button className="download-button">
          DOWNLOAD
        </button>
      </header>
      <div className="box">
        <div><h1>Take care of yours family's <span className="health">health.</span></h1></div>
        <p>All in one destination for COVID-19 health queries. Consult 10,000+ health workers about your concerns.</p>
        <button className="get-started-button">
          GET STARTED
        </button>
      </div>
      {/* Rest of your component */}
    </div>
  );
}

export default Part1;
