import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { INITIAL_CONTACTS } from "../data/initial-contacts";
import { Contact } from "@/definitions/Contact";
import * as api from "../api/api";

const ContactsContext = createContext();

export function useContacts() {
  return useContext(ContactsContext);
}

export default function ContactsContextProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  
  // Fetch contacts from server
  async function fetchContacts() {
    const data = await api.retrieveContacts();
    setContacts(data);
    setSelectedContact(data[0]); // Set the first contact as selected by default
  }

  // On initial page mount, fetch contacts.
  useEffect(() => {
    fetchContacts();
  }, []);

  // TODO Function for adding a new contact

  // Function for deleting a contact
  async function deleteContact(id: string) {
    console.log("Deleting contact with id:", id);
  }

  // Function for editing a contact
  async function editContact(contact: Contact) {
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
