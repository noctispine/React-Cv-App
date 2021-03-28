import React from 'react'

const PersonalPrev = ({personal}) => {
    return (
        <div className="personal-prev">
            <h3 className="first-last-name">{personal.firstName} {personal.lastName}</h3>
            <h4 className="title">{personal.title}</h4>
            <h5 className="email"><i class="fas fa-envelope"></i>    {personal.email}</h5>
            <h3 className="summary-header">Summary</h3>
            <p className="summary">{personal.summary}</p>
            
        </div>
    )
}

export default PersonalPrev
