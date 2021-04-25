import React from "react";

const EducationForm = ({ education, onChange, handleAdd, handleDelete }) => {
  const educationItems = education.map((item) => (
    <div key={item.id} id={item.id}>
      <input
        onChange={(e) => onChange(e, item.id)}
        type="text"
        name="school"
        value={item.school}
        placeholder="School"
      />
      <input
        onChange={(e) => onChange(e, item.id)}
        type="number"
        name="degree"
        value={item.degree}
        placeholder="Degree"
        min="0"
        max="4"
      />
      <button className="add" onClick={handleAdd}>Add</button>
      <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  ));

  return (
    <div className="education-form">
      <h3 id="education">Education</h3>
      {educationItems}
    </div>
  );
};

export default EducationForm;
