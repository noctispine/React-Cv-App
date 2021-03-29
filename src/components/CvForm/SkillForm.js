import React from "react";

const SkillForm = ({ skill, onChange, handleAdd, handleDelete }) => {
  const skills = skill.map((item) => (
    <div key={item.id}>
      <input
        onChange={(e) => onChange(e, item.id)}
        type="text"
        name="title"
        value={item.title}
        placeholder="Skill Title"
      />
      <input
        onChange={(e) => onChange(e, item.id)}
        type="text"
        name="skills"
        value={item.skills}
        placeholder="Skill"
      />

      <button onClick={handleAdd}>Add</button>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  ));
  return <div className="skill-form">{skills}</div>;
};

export default SkillForm;
