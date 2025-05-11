import { useState, createContext, useContext } from "react";
import { INITIAL_CONTACTS } from "../data/initial-contacts";
import { ReactNode } from "react";

const ContactsContext = createContext();

export function useContacts() {
  return useContext(ContactsContext);
}

export default function ContactsContextProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [selectedContact, setSelectedContact] = useState(INITIAL_CONTACTS[0]);
  
  // TODO Fetch contacts from server

  // TODO On initial page mount, fetch contacts.

  // TODO Function for adding a new contact

  // Function for deleting a contact
  async function deleteContact(id) {
    console.log("Deleting contact with id:", id);
  }

  // Function for editing a contact
  async function editContact(contact) {
    console.log("Editing contact:", contact);
  }

  const context = {
    contacts,
    selectedContact,
    setSelectedContact,
    deleteContact,
    editContact
  };

  return (
    <ContactsContext.Provider value={context}>
      {children}
    </ContactsContext.Provider>
  )
}
