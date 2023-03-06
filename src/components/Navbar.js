import React from "react";
import '../stylesheets/Navbar.css'

function NavigationBar () {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
        <a className="navbar-brand" href="#home"><img className="navbar-brand" src={require('../images/TomasFerrari.gif')} alt="tomas Ferrari"></img></a>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#About">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#WorkExperience">Work Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#PastWork">Apps</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href='#Skills'>Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href='#Contact'>Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;