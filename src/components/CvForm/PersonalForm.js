import React from "react";

const PersonalForm = ({ personal, onChange }) => {
  return (
    <div className="personal-form">
      <h3>Personal</h3>
      <div>
        <input
          onChange={onChange}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={personal.firstName}
        />
        <input
          onChange={onChange}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={personal.lastName}
        />
        <input
          onChange={onChange}
          type="text"
          name="title"
          placeholder="Title"
          value={personal.title}
        />
        <input
          onChange={onChange}
          type="email"
          name="email"
          placeholder="Email"
          value={personal.email}
        />
        <input
          onChange={onChange}
          type="email"
          name="summary"
          placeholder="Summary"
          value={personal.summary}
        />
      </div>
    </div>
  );
};

export default PersonalForm;
