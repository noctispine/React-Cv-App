import React from "react";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import SkillForm from "./SkillForm";

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

  //skill
  handleChangeSkill,
  handleAddSkill,
  handleDeleteSkill,
}) => {
  return (
    <div className="cv-form">
      <PersonalForm personal={cv.personal} onChange={onChangePersonal} />
      <SkillForm
        skill={cv.skill}
        onChange={handleChangeSkill}
        handleAdd={handleAddSkill}
        handleDelete={handleDeleteSkill}
      />
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
    </div>
  );
};

export default CvForm;
