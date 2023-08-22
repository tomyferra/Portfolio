import React from "react";
import '../stylesheets/Skills.css';
import reactLogo from '../images/react.webp'
import gitLogo from '../images/gitLogo.png'
import javascriptLogo from '../images/javascriptLogo.webp'
import bootstrapLogo from '../images/bootstrapLogo.webp'
import HTMLLogo from '../images/HTMLLogo.webp'
import CSSLogo from '../images/CSSLogo.webp'
import pythonLogo from '../images/pythonLogo.png'
import tableauLogo from '../images/tableauLogo.png'
import powerBiLogo from '../images/powerBiLogo.webp'
import TailwindLogo from '../images/TailwindLogo.webp'
import MongoDBLogo from '../images/MongoDb.webp'
import PostmanLogo from '../images/PostmanLogo.webp'
import AWSLogo from '../images/awsLogo.webp'

function Skills () {
  return(
    <div id='Skills' className='skills-container container-fluid'>
    <div className='skills-text-container text-center container'>
      <div className="row">
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
         <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
       </svg>
      <h1>Skills & Technology</h1>
      </div>
    </div>
    <div className="container">
      <div className="row skill-container">
        <img className='imgLogo col-6' src={reactLogo} alt="Logo for React" />
        <img className='imgLogo col-6' src={gitLogo} alt="Logo for Git" />
        <img className='imgLogo col-6' src={javascriptLogo} alt="Logo for JS" />
        <img className='imgLogo col-6' src={bootstrapLogo} alt="Logo for Bootstrap" />
        <img className='imgLogo col-6' src={HTMLLogo} alt="Logo for HTML" />
        <img className='imgLogo col-6' src={CSSLogo} alt="Logo for CSS" />
        <img className='imgLogo col-6' src={TailwindLogo} alt="Logo for Tailwind" />
        <img className='imgLogo col-6' src={MongoDBLogo} alt="Logo for MongoDB" />
        <img className='imgLogo col-6' src={PostmanLogo} alt="Logo for Postman" />
        <img className='imgLogo col-6' src={pythonLogo} alt="Logo for Python" />
        <img className='imgLogo col-6' src={tableauLogo} alt="Logo for Tableu" />
        <img className='imgLogo col-6' src={powerBiLogo} alt="Logo for PowerBI" />
        <img className='imgLogo col-6' src={AWSLogo} alt="Logo for AWS" />
      </div>
    </div>
  </div>
  );
}

export default Skills;