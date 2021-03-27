import React from "react";
import PersonalForm from "./PersonalForm";

const CvForm = ({cv, onChangePersonal}) => {
  return <>
    <PersonalForm personal={cv.personal} onChange={onChangePersonal}/>
  </>;
};

export default CvForm;
