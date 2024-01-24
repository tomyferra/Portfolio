import React from "react";
import '../stylesheets/About.css';
import ProfilePicture from '../images/profilepicture.webp';

function About () {
  return (
    <div id='About' className='container-fluid row about-container'>
      <div className="container col col-md-7 about-introduction align-items-center justify-content-center">
        <div className="row py-10">
          <h1 className="text-center" >Hi, I'm Tomas Ferrari.</h1>
          <h2 className="text-center">Software Developer.</h2>
        </div>
        <div className="row">
          <h4 className="text-secondary text-center">I am an experienced backend developer with 5 years doing Python and SQL, complemented by 3 years of front-end work in React, Bootstrap, Tailwind and JavaScript. Aspiring to become a full-stack developer driven to fuse technical depth with creative frontend solutions. Open to relocation for the right opportunity. Eager to contrinute my expertise to innovative projects and expand my skill set.</h4>
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