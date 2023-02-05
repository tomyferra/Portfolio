import React from "react";
import '../stylesheets/Project.css'


function Project ({ name, summary, identifier, url, urlgithub}) {
  return (
    <div className="project-style h-100">
      <div className="card card-project border-0 h-100">
        <div className="card-body border rounded">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{summary}</p>
          <a href={url} className="card-link" target='_blank' rel='noreferrer' >Go to site!</a>
          <a href={urlgithub} className="card-link" target='_blank' rel='noreferrer' >Github</a>
        </div>
      </div>
    </div>
  );
}

export default Project;