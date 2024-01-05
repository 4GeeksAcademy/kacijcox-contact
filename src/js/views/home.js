import React, { useState, useContext, useEffect } from "react";
import { Context } from '../store/appContext';
import { useNavigate } from "react-router";
import ContactCard from '../component/contactcard';

// Use the ContactCard component within the Home component
export const Home = () => {
  const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getContacts(){
      await actions.getContacts()
      setContacts(store.contacts)
    }
    getContacts()
  }, []); // Add an empty dependency array if you want it to run only once on mount

  return (
    <div>
      {/* You can use the ContactCard component here */}
      {contacts?.map((contact) => (
        <ContactCard name={contact.full_name}
          phone={contact.phone}
          email={contact.email}
          address={contact.address}
          contactid={contact.id} />
      ))}
      {/* Rest of your Home component code */}
     
    </div>

  );
};
