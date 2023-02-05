import React from "react";
import '../stylesheets/Skill.css';

function Skill ({ name, identifier }) {
  return(
    <div className="skill-style h-40">
      <div className="container h-40">
        <div className="card-body border rounded row">
          <h5 className="col text-center card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
}

export default Skill;