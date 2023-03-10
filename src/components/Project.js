import React from "react";
import '../stylesheets/Project.css'



function Project ({ name, summary, url, urlgithub, sitepicture}) {
  return (
    <div className="col-sm-4 my-card">
      <div class="card">
        <img src={sitepicture} alt={name} className="projectImage card-img-top"/>
      <div class="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{summary}</p>
        <div className="text-center">
        <button type="button" className="btn btn-primary"><a href={url}  className='card-link' target='_blank' rel='noreferrer' >Go To Site</a></button>
        <button type="button" className="btn btn-primary"><a href={urlgithub}  className='card-link' target='_blank' rel='noreferrer' >Github</a></button>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Project;