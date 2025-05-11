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

  // const getContactListItem = (contact: Contact) => <ContactListItem key={contact._id} contact={contact} />;

  // function getContactListItem(contact: Contact) {
  //   return <ContactListItem key={contact._id} contact={contact} />;
  // }

  // const contactListItems = contacts.map(getContactListItem);

  // const contactListItems = []
  // for (let i = 0; i < contacts.length; i++) {
  //  contactListItems.push(
  //   getContactListItem(contacts[i])
  //   );
  // }

  const [SearchTerm, setSearchTerm] = useState("");
  const { contacts, selectedContact, setSelectedContact } = useContacts();

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  const filteredContacts = contacts.filter((contact: Contact) => {
    return contact.name.toLowerCase().includes(SearchTerm.toLowerCase());
  });

  // function isMatch(contact: Contact) {
  //   return contact.name.toLowerCase().includes(SearchTerm.toLowerCase());
  // }

  // const filteredContacts = contacts.filter(isMatch);

  return (
    <nav className="side-bar">
      {/* Search box */}
      <header>
        <h2>Friends</h2>
        <input type="text" value={SearchTerm} onChange={handleSearchChange} />
      </header>

      {/* List of contacts */}
      <section>
        <ul>
          {/* <ContactListItem contact={contacts[0]} />

          <ContactListItem contact={contacts[1]} />

          <ContactListItem contact={contacts[2]} /> */}

          {/* {contactListItems} */}
          
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