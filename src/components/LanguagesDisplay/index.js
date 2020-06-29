import React from 'react';



const LanguagesDisplay = (props) => {
    return (
        <div>
            <p> {props.name}</p>
            <p> {props.proficiency}</p>
        </div>
    )
}

export default LanguagesDisplay;