import React from "react";

const EducationForm = ({ education, onChange, handleAdd, handleDelete }) => {
  const educationItems = education.map((item) => (
    <div key={item.id} id={item.id}>
      <h3>Education</h3>
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
      <button onClick={handleAdd}>Add</button>
      <button onClick={(id) => handleDelete(item.id)}>Delete</button>
    </div>
  ));
  return <div className="education-form">{educationItems}</div>;
};

export default EducationForm;
