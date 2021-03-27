import React from "react";

const EducationPrev = ({ education }) => {
  const educationPrevItems = education.map((item) => (
    <>
      <h3>{item.school}</h3>
      <h7>{item.degree}</h7>
    </>
  ));
  return <div className="education-prev">{educationPrevItems}</div>;
};

export default EducationPrev;
