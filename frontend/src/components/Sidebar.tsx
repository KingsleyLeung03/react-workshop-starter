import ContactListItem from "./ContactListItem";
import AddContactButton from "./AddContactButton";

/**
 * A sidebar with links to view each contact, or add new contacts.
 *
 * The contacts list can be filtered by name.
 */
export default function Sidebar() {
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
          <ContactListItem />

          <ContactListItem />

          <ContactListItem />
        </ul>
      </section>

      {/* Add contact button */}
      <footer>
        <AddContactButton />
      </footer>
    </nav>
  );
}