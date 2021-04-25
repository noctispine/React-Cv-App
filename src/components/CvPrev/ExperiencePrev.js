import React from "react";

const ExperiencePrev = ({ experience }) => {
  const experienceItems = experience.map((item) => (
    <li key={item.id}>
      <h3 className="company">{item.company}</h3>
      <h3 className="role">{item.role}</h3>
      <h3>Description:</h3>
      <p className="description">{item.description}</p>
    </li>
  ));
  return (
    <div className="experience prev">
        <h2 className="experience-header">Experience</h2>
      <ul>{experienceItems}</ul>
    </div>
  );
};

export default ExperiencePrev;
