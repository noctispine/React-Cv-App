import React from 'react'

const PersonalPrev = ({personal}) => {
    return (
        <div className="personal-prev">
            <h3>{personal.firstName} {personal.lastName}</h3>
            <h3>{personal.title}</h3>
            <h3>{personal.email}</h3>
            <p>{personal.summary}</p>
            
        </div>
    )
}

export default PersonalPrev
