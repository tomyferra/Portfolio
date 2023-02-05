import React from "react";
import '../stylesheets/About.css';
import ProfilePicture from '../images/profilepicture.jpg';

function About () {
  return (
    <div id='About' className='container-fluid row about-container'>
      <div className="container col col-md-7 about-introduction align-items-center justify-content-center">
        <div className="row">
          <h1 className="text-center" >Hi, I'm Tomas Ferrari.</h1>
          <h2 className="text-center">I love to build amazing websites.</h2>
        </div>
        <div className="row">
          <h4 className="text-secondary text-center">Electronic Engineer. Python backend developer. Data Science. I easily adapt to changes and seek for challenges constantly. Fluent English and great passion for informatics.</h4>  
        </div>      
      </div>
      <div className="container col-sm-5 align-items-center d-flex img-rounded">
        <img 
          className='rounded mx-auto img-max img-fluid'
          src={ProfilePicture}
          alt='Tomas Ferrari'
        />
        {/* <div className='mask container' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex container-fluid justify-content-center h-100'>
            <p className='text-white mb-0'>Can you see me?</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About;