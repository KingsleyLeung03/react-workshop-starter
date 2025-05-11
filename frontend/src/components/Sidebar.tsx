import ContactListItem from "./ContactListItem";
import AddContactButton from "./AddContactButton";
import { Contact } from "@/definitions/Contact";
import { useContacts } from "../context/ContactsContextProvider";
import { useState } from "react";

/**
 * A sidebar with links to view each contact, or add new contacts.
 *
 * The contacts list can be filtered by name.
 */
export default function Sidebar() {
  const [SearchTerm, setSearchTerm] = useState("");
  const { contacts, selectedContact, setSelectedContact } = useContacts();

  // Function to filter contacts based on search term
  const filteredContacts = contacts.filter((contact: Contact) => {
    return contact.name.toLowerCase().includes(SearchTerm.toLowerCase());
  });

  function handleContactClicked(contact) {
    setSelectedContact(contact);
  }

  return (
    <nav className="side-bar">
      {/* Search box */}
      <header>
        <h2>Friends</h2>
        <input type="text" value={SearchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </header>

      {/* List of contacts */}
      <section>
        <ul>          
          {filteredContacts?.map?.((contact: Contact) => (
            <ContactListItem 
            key={contact._id} 
            contact={contact} 
            onContactClick={setSelectedContact} 
            isActive={contact._id === selectedContact?._id} />
          ))}
        </ul>
      </section>

      {/* Add contact button */}
      <footer>
        <AddContactButton />
      </footer>
    </nav>
  );
}