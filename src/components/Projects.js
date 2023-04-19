import React from "react";
import '../stylesheets/PastWork.css';
import CryptoApp from "../images/CryptoApp.webp";
import WineApp from "../images/WineMe.webp";
import EstudioVivanco from "../images/EstudioVivanco.webp";
import '../stylesheets/Project.css'
import Project from "./Project";
import { ProjectsData } from "./ProjectsData";
//import project from '../images/CryptoApp.webp';

function PastWork () {

  return (
    <div id='PastWork' className='pastwork-container container-fluid'>
      <div className='projects-text-container text-center container'>
        <div className="row">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
          <h1>Apps I've Built</h1>
        </div>
      </div>
      <div className="container">
      <div className="row">
        <Project name='Crypto Converter' sitepicture={CryptoApp} summary='This is a project where you input an amount of BTC and ig tives you the equivalence in other coins as well as the total price' url='https://tomyferra.github.io/cryptoconverter/' urlgithub='https://github.com/tomyferra/cryptoconverter'/>       
        <Project name='Wine Me' sitepicture={WineApp} summary="I'm a Wine lover and in this project I wanted to keep track of the wines that I've tasted and give them certain score." url='https://wineme.onrender.com/' urlgithub='https://github.com/tomyferra/wineme' />
        <Project name='[Site in construction] Estudio Vivanco' sitepicture={EstudioVivanco} summary='This is a consulting company specialized in ship damage control. With customers in Argentina and Europe.' url='https://tomyferra.github.io/estudiovivanco/' urlgithub='https://github.com/tomyferra/estudiovivanco'/>
        
      </div>
      </div>
    </div>
  );
}

export default PastWork;