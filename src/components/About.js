import React from "react";
import '../stylesheets/About.css';
import ProfilePicture from '../images/profilepicture.webp';

function About () {
  return (
    <div id='About' className='container-fluid row about-container'>
      <div className="container col col-md-7 about-introduction align-items-center justify-content-center">
        <div className="row py-10">
          <h1 className="text-center" >Hi, I'm Tomas Ferrari.</h1>
          <h2 className="text-center">Software Developer</h2>
        </div>
        <div className="row">
          <h4 className="text-secondary text-center">I am a backend developer with 4 years of experience in Python and SQL. I also have 2 years of front-end development experience with React, Bootstrap, and JavaScript. I am eager to become a full-stack developer and expand my skill set.</h4>
          <h4 className="text-secondary text-center">Although I'm currently based in Buenos Aires, I'm open to the possibility of relocating for the right opportunity. I'm always eager to explore new opportunities to advance my career and would be delighted to hear from you if you're interested in collaborating.</h4>
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