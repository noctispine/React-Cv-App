import React from 'react'
import PersonalPrev from "./PersonalPrev"

const cvPrev = ({cv}) => {
    return (
        <div>
            <PersonalPrev personal={cv.personal}/>
        </div>
    )
}

export default cvPrev
