import React from "react";

const ExperienceForm = ({ experience, onChange, handleAdd, handleDelete }) => {
  const experienceItems = experience.map((item) => (
    <div key={item.id} id={item.id}>
      <h3>Experience</h3>
      <input
        onChange={(e) => onChange(e, item.id)}
        type="text"
        name="company"
        value={item.company}
        placeholder="Company"
      />
      <input
        onChange={(e) => onChange(e, item.id)}
        type="text"
        name="role"
        value={item.role}
        placeholder="Role"
      />
      <textarea
        onChange={(e) => onChange(e, item.id)}
        name="description"
        value={item.description}
        placeholder="Description"
      ></textarea>

      <button onClick={handleAdd}>Add</button>
      <button onClick={(id) => handleDelete(item.id)}>Delete</button>
    </div>
  ));

  return <div className="experience-form">{experienceItems}</div>;
};

export default ExperienceForm;
