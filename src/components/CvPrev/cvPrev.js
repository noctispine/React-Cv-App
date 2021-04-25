import React from "react";
import PersonalPrev from "./PersonalPrev";
import EducationPrev from "./EducationPrev";
import ExperiencePrev from "./ExperiencePrev";

class cvPrev extends React.Component {
  render() {
    const { cv } = this.props;
    return (
      <div className="cv-prev">
        <PersonalPrev personal={cv.personal} />
        <EducationPrev education={cv.educationInfo} />
        <ExperiencePrev experience={cv.experience} />
      </div>
    );
  }
}

export default cvPrev;
