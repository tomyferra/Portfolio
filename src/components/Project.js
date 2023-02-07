import React from "react";
import '../stylesheets/Project.css'


function Project ({ name, summary, identifier, url, urlgithub}) {
  return (
    <div className="project-style h-100">
      <div className="card card-project border-0 h-100">
        <div className="card-body text-center border rounded">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{summary}</p>
          <button type="button" className="btn btn-primary"><a href={url}  className='card-link' target='_blank' rel='noreferrer' >Go To Site</a></button>
          <button type="button" className="btn btn-primary"><a href={urlgithub}  className='card-link' target='_blank' rel='noreferrer' >Github</a></button>
        </div>
      </div>
    </div>
  );
}

export default Project;