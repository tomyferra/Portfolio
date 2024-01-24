import React from "react";
import '../stylesheets/PastWork.css';
import CryptoApp from "../images/CryptoApp.webp";
import WineApp from "../images/WineMe.webp";
import FutbolArgentino from "../images/FutbolArgentino.webp";
import '../stylesheets/Project.css'
import Project from "./Project";

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
        <Project name='Crypto Converter' sitepicture={CryptoApp} summary='This web application allows users to convert Bitcoin to other currencies using the latest price data from Binance. It provides a comprehensive list of commonly traded currencies and real-time exchange rates. This app is perfect for investors and traders who need quick access to accurate market data.' url='https://tomyferra.github.io/cryptoconverter/' urlgithub='https://github.com/tomyferra/cryptoconverter'/>       
        <Project name='WineMe' sitepicture={WineApp} summary="This web app lets users rate wines from Argentina based on personal preferences. The wine list comes from a constantly updated MongoDB database, and the app provides wine details, such as origin and grape variety. Users can explore the list and rate wines via an easy-to-use interface." url='https://wineme.onrender.com/' urlgithub='https://github.com/tomyferra/wineme' />
        <Project name='[Site in construction] Futbol Argentino Game' sitepicture={FutbolArgentino} summary='This is a simple web app game where you can try guessing which Argentina futbol team has the biggest stadium. You add one score by each guess. Next task: Add a leaderboard where all high scores will be displayed' url='https://futbolargentino.onrender.com' urlgithub='https://github.com/tomyferra/FutbolArgentino/'/>
      </div>
      </div>
    </div>
  );
}

export default PastWork;