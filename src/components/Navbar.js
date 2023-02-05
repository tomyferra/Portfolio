import React from "react";
import '../stylesheets/Navbar.css'

function NavigationBar () {
  return (
    <nav class="navbar navbar-expand-md">
      <div class="container-fluid">
        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-toggler">
          <a class="navbar-brand" href="#home">Tomas Ferrari</a>
          <ul class="navbar-nav d-flex justify-content-center align-items-center">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#About">About</a>
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