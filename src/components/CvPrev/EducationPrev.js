import React from "react";

const EducationPrev = ({ education }) => {
  const educationPrevItems = education.map((item) => (
    <li key={item.id}>
      <h3 className="school">{item.school}</h3>
      <h5 className="degree">Degree: {item.degree}</h5>
    </li>
  ));
  return (
    <div className="education prev">
      <h2 className="education-header">Education</h2>
      <ul>{educationPrevItems}</ul>
    </div>
  );
};

export default EducationPrev;
