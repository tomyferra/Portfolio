import React from "react";



function Experience ({ jobname, companyname, description, datestarted, identifier, dateended, technologies }) {
  return(
    <div className="xper">
                  <p className="gray-text">{datestarted}</p>
            <h3>{jobname} at {companyname}</h3>
            <p className="gray-text">{description}</p>
            <p className="gray-text"><u>Technologies:</u> {technologies}</p>
    </div>
    // <div className="experience-container-style h-100">
    //   <div className="card h100">
    //     <div className="card-body border rounded row">
    //       <div className="job-position">
    //         {jobname} at {companyname}
    //       </div>

    //       <div className="job-dates">
    //         {datestarted} - {dateended}
    //       </div>
        
    //       <div className="description">
    //         {description}
    //       </div>

    //       <div className="row">
    //         <div className="technology">
    //           <br/> <b><u>Technologies used:</u></b> {technologies}
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </div>
  )
}

export default Experience;