import React from "react";

const PersonalPrev = ({ personal }) => {
  return (
    <div className="personal-prev">
      <h1 className="first-last-name">
        {personal.firstName} {personal.lastName}
      </h1>
      <h4 className="title">{personal.title}</h4>
      <h4 className="email">
        <i class="far fa-envelope"></i> {personal.email}
      </h4>
      <h4 className="phone">
        <i class="fas fa-phone-square-alt"></i> {personal.phone}
      </h4>
      <h4 className="phone">
        <i class="fas fa-map-marker-alt"></i> {personal.location}
      </h4>
      <h2 className="summary-header">Summary</h2>
      <p className="summary">{personal.summary}</p>
    </div>
  );
};

export default PersonalPrev;
