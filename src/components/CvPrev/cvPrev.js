import React from "react";
import PersonalPrev from "./PersonalPrev";
import EducationPrev from "./EducationPrev";
import ExperiencePrev from "./ExperiencePrev";

const cvPrev = ({ cv }) => {
  return (
    <div className="cv-prev">
      <PersonalPrev personal={cv.personal} />
      <EducationPrev education={cv.educationInfo} />
      <ExperiencePrev experience={cv.experience} />
    </div>
  );
};

export default cvPrev;
