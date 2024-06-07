import React from "react";

import "./styles.scss";

const Skill = ({ skills }) => {
  return (
    <div className="block skill-block">
      <h4>Skill</h4>
      <hr />

      <div className="row">{skills.map((skill) => skill.name).join(", ")}</div>
    </div>
  );
};

export default Skill;
