import React, {useState, useEffect} from "react";
import TextOutput from "../TextOutput";
import ImageCard from "../ImageCard";
import ContactCard from "../ContactCard";


const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect( () =>  {fetch("https://randomuser.me/api/?results=3")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setContacts(data.results);
    });}, []);

  return (
    <div>
      <ImageCard />
      <TextOutput />
      {contacts.map((contact) => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + ' ' + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </div>
  );
};

export default App;
