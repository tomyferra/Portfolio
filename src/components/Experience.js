import React from "react";



function Experience ({ jobname, companyname, description, datestarted, identifier, dateended, technologies }) {
  return(
    <div className="xper">
      <p className="gray-text">{datestarted}</p>
      <h3>{jobname} at {companyname}</h3>
      <p className="gray-text">{description}</p>
      <p className="gray-text"><u>Technologies:</u> {technologies}</p>
    </div>
  )
}

export default Experience;