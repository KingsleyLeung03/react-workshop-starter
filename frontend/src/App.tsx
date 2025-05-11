import { DEFAULT_IMAGE } from "./util/image-utils";
import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { INITIAL_CONTACTS } from "./data/initial-contacts";
import { Contact } from "./definitions/Contact";
import { useState } from "react";

export default function App() {

  const [selectedContact, setSelectedContact] = useState(INITIAL_CONTACTS[0]);

  function handleContactClick(contact: Contact) {
    setSelectedContact(contact);
  }

  return (
    <>
      {/* TODO Add sidebar here */}
      <Sidebar contacts={INITIAL_CONTACTS} onContactClick={handleContactClick} selectedContact={selectedContact} />

      <main className="main-area">
        {/* TODO Contact display goes here */}
        {/* <h1>Hello, WDCC! 🐮💻</h1>
        <p>My first paragraph</p> */}
        
        <ContactDisplay contact={selectedContact}/>
        

        {/* TODO Edit / Delete buttons section goes here */}
          <section style={{ display: "flex", gap: "1rem" }}>
            <button className="button">
              Edit
            </button>
            <button className="button red">
              Delete
            </button>
          </section>

      </main>

      {/* TODO Modal for adding new contacts */}

      {/* TODO Modal for editing existing contacts */}
    </>
  );
}
