import React, { useState, useRef } from "react";
import emptyCv from "./Utils/emptyCv";
import CvForm from "./CvForm/CvForm";
import CvPrev from "./CvPrev/cvPrev";

const Main = () => {
  const [cv, setCv] = useState(emptyCv);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setCv({ ...cv, personal: { ...cv.personal, [name]: value } });
  };

  return (
    <>
      <CvForm cv={cv} onChangePersonal={handleChangePersonal} />
      <CvPrev cv={cv} />
    </>
  );
};

export default Main;
