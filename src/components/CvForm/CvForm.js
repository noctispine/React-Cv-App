import React from "react";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

const CvForm = ({
  // handle Personal

  cv,
  onChangePersonal,

  // handle Education
  handleChangeEducation,
  handleAddEducation,
  handleDeleteEducation,

  // handle Experience
  handleChangeExperience,
  handleAddExperience,
  handleDeleteExperience,
  handleLoadExample,

  onPrint,
}) => {
  return (
    <div className="cv-form">
      <PersonalForm personal={cv.personal} onChange={onChangePersonal} />
      <EducationForm
        education={cv.educationInfo}
        onChange={handleChangeEducation}
        handleAdd={handleAddEducation}
        handleDelete={handleDeleteEducation}
      />
      <ExperienceForm
        experience={cv.experience}
        onChange={handleChangeExperience}
        handleAdd={handleAddExperience}
        handleDelete={handleDeleteExperience}
      />
      <button className="loadExample" onClick={handleLoadExample}>
        Load Example CV
      </button>
      <button class="print" onClick={onPrint}>Download PDF</button>
    </div>
  );
};

export default CvForm;
