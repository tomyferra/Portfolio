import React from "react";
import '../stylesheets/WorkExperience.css'
import {WorkExperienceData} from './WorkExperienceData'
import Experience from './Experience'

function ExperienceTimeline () {
  return(
    <div id="WorkExperience" className="work-experience-container">
      <div className='work-experience-text-container text-center container'>
        <div className="row">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
          <h1>Work Experience</h1>
        </div>
      </div>
      <div className="container-timeline">
        <ul class="timeline">
        
          {WorkExperienceData.map( (workexperience) => (
            <li>
              <div className="experience">
                <Experience jobname={workexperience.jobname} companyname={workexperience.companyname} description={workexperience.description} identifier={workexperience.id} datestarted={workexperience.datestarted} dateended={workexperience.dateended} technologies={workexperience.technologies} />
              </div>
            </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default ExperienceTimeline;