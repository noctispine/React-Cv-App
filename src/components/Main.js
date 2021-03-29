import React, { useState } from "react";
import emptyCv from "./Utils/emptyCv";
import CvForm from "./CvForm/CvForm";
import CvPrev from "./CvPrev/cvPrev";
import uniqid from "uniqid";
import exampleCv from "./Utils/exampleCv";

const Main = () => {
  const [cv, setCv] = useState(emptyCv);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setCv({ ...cv, personal: { ...cv.personal, [name]: value } });
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setCv(() => {
      const newEducation = cv.educationInfo.map((item) => {
        if (item.id === id) return { ...item, [name]: value };
        return item;
      });
      return { ...cv, educationInfo: [...newEducation] };
    });
  };

  const handleAddEducation = () => {
    setCv({
      ...cv,
      educationInfo: [
        ...cv.educationInfo,
        {
          id: uniqid(),
          school: "",
          degree: "",
        },
      ],
    });
  };

  // Handle Education

  const handleDeleteEducation = (id) => {
    setCv(() => {
      const newEducation = cv.educationInfo.filter((item) => item.id !== id);
      return { ...cv, educationInfo: [...newEducation] };
    });
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    setCv(() => {
      const newExperience = cv.experience.map((item) => {
        if (item.id === id) return { ...item, [name]: value };
        return item;
      });
      return { ...cv, experience: [...newExperience] };
    });
  };

  const handleAddExperience = () => {
    setCv({
      ...cv,
      experience: [
        ...cv.experience,
        {
          id: uniqid(),
          company: "",
          role: "",
          description: "",
        },
      ],
    });
  };

  const handleDeleteExperience = (id) => {
    setCv(() => {
      const newExperience = cv.experience.filter((item) => item.id !== id);
      setCv({ ...cv, experience: [...newExperience] });
    });
  };

  const loadExample = () => {
    setCv(exampleCv);
  };

  const handleChangeSkill = (e, id) => {
    const { name, value } = e.target;

    setCv(() => {
      const newSkill = cv.skill.map((item) => {
        if (item.id === id) return { ...cv.skill, [name]: value };
        return item;
      });
      return { ...cv, skill: [...newSkill] };
    });
  };

  const handleAddSkill = () => {
    setCv({
      ...cv,
      skill: [
        ...cv.skill,
        {
          id: uniqid(),
          title: "",
          skills: [],
        },
      ],
    });
  };

  const handleDeleteSkill = (id) => {
    setCv(() => {
      const newSkill = cv.skill.filter((item) => item.id !== id);
      return { ...cv, skill: [...newSkill] };
    });
  };

  return (
    <>
      <CvForm
        cv={cv}
        onChangePersonal={handleChangePersonal}
        handleChangeEducation={handleChangeEducation}
        handleAddEducation={handleAddEducation}
        handleDeleteEducation={handleDeleteEducation}
        handleChangeExperience={handleChangeExperience}
        handleAddExperience={handleAddExperience}
        handleDeleteExperience={handleDeleteExperience}
        handleLoadExample={loadExample}
        handleChangeSkill={handleChangeSkill}
        handleAddSkill={handleAddSkill}
        handleDeleteSkill={handleDeleteSkill}
      />
      <CvPrev cv={cv} />
    </>
  );
};

export default Main;
