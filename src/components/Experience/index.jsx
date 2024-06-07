import React from "react";

import "./styles.scss";

const Experience = ({ title, experiences }) => {
  return (
    <div className="block experience-block">
      <h4>{title || "Experience"}</h4>
      <hr />
      {experiences.map((exp) => (
        <ExperienceItem {...exp} key={exp.name} />
      ))}
    </div>
  );
};

const ExperienceItem = ({ name, period, location, desc, subDesc }) => {
  return (
    <div className="experience-item">
      <div className="bullet" />
      <h5 className="name">{name}</h5>
      <h5 className="period">{location}, {period}</h5>
      <div className="desc">{desc}</div>
      <div className="sub-desc">{subDesc}</div>
    </div>
  );
};

export default Experience;
