import React, { useState } from "react";
import "./styles.css";
// import smaller from "../../images/smaller.jpg";

const ContactCard = props => {
  const [showAge, setShowAge] = useState(false);
  return (
    <div className="contact-card">
      {/* <img src={smaller} alt="profile" /> */}
      <img src = {props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        {/* {showAge && <p>Age: 25</p>} */}
        <button onClick={() => setShowAge(!showAge)}> Toggle Age </button>
        {showAge === true && props.age === 25 ? <p> Age:  {props.age}</p> : null}  
      </div>
    </div>
  );
};

export default ContactCard;
