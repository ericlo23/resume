import React from "react";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

import "./styles.scss";

const Skill = ({ skills }) => {
  return (
    <div className="block skill-block">
      <h2>
        Skill{" "}
        <span className="annotation">
          *Stars represent relative skill levels.
        </span>
      </h2>
      <hr />

      <div className="row">
        {skills.map((skill) => (
          <SkillItem name={skill.name} score={skill.score} key={skill.name} />
        ))}
      </div>
    </div>
  );
};

const repeat = (num, Comp) => {
  return (
    <>
      {Array(num)
        .fill(0)
        .map((_, index) => (
          <Comp key={index} />
        ))}
    </>
  );
};

const SkillItem = ({ name, score }) => {
  const numFull = Math.trunc(score);
  const numEmpty = 3 - numFull;
  return (
    <div className="skill-item">
      <div className="name">{name}</div>
      <div className="score">
        {repeat(numFull, TiStarFullOutline)}
        {repeat(numEmpty, TiStarOutline)}
      </div>
    </div>
  );
};

export default Skill;
