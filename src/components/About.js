import React from "react";
import '../stylesheets/About.css';
import ProfilePicture from '../images/profilepicture.jpg';

function About () {
  return (
    <div id='About' className='container-fluid row about-container'>
      <div className="container col col-md-7 about-introduction align-items-center justify-content-center">
        <div className="row">
          <h1 className="text-center" >Hi, I'm Tomas Ferrari.</h1>
          <h2 className="text-center">Software Developer</h2>
        </div>
        <div className="row">
          <h4 className="text-secondary text-center">Hi, I'm Tomas Ferrari. I'm a Software Developer having specialization in back end and looking forward to become a Full Stack developer. I have 4 years of experience as a Backend Developer and 2 years as a Front Developer. My backend skills include Python and SQL. In Front end i have skills in React, Bootstrap and Javascript. </h4>
          <h4 className="text-secondary text-center">I'm located in Buenos Aires, Argentina. </h4>  
          
        </div>      
      </div>
      <div className="container col-sm-5 align-items-center d-flex img-rounded">
        <img 
          className='rounded mx-auto img-max img-fluid'
          src={ProfilePicture}
          alt='Tomas Ferrari'
        />
      </div>
    </div>
  );
}

export default About;