import React from 'react'
import PersonalPrev from "./PersonalPrev"
import EducationPrev from "./EducationPrev"

const cvPrev = ({cv}) => {
    return (
        <div>
            <PersonalPrev personal={cv.personal}/>
            <EducationPrev education={cv.educationInfo}/>
        </div>
    )
}

export default cvPrev
