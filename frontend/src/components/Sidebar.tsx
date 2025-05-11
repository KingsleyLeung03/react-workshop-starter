import ContactListItem from "./ContactListItem";
import AddContactButton from "./AddContactButton";
import { Contact } from "@/definitions/Contact";

/**
 * A sidebar with links to view each contact, or add new contacts.
 *
 * The contacts list can be filtered by name.
 */
export default function Sidebar({contacts}: {contacts: Contact[]}) {

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

  return (
    <nav className="side-bar">
      {/* Search box */}
      <header>
        <h2>Friends</h2>
        <input type="text" />
      </header>

      {/* List of contacts */}
      <section>
        <ul>
          {/* <ContactListItem contact={contacts[0]} />

          <ContactListItem contact={contacts[1]} />

          <ContactListItem contact={contacts[2]} /> */}

          {/* {contactListItems} */}
          
          {contacts?.map?.((contact) => (
            <ContactListItem key={contact._id} contact={contact} />
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