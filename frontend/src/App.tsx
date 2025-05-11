import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { useContacts } from "./context/ContactsContextProvider";
import EditContactModal from "./components/EditContactModal";

export default function App() {
  const [isEditContactVisible, setEditContactVisible] = useState(false);
  const { selectedContact, deleteContact } = useContacts();

  return (
    <>
      {/* TODO Add sidebar here */}
      <Sidebar />

      <main className="main-area">
        {/* TODO Contact display goes here */}
        {/* <h1>Hello, WDCC! 🐮💻</h1>
        <p>My first paragraph</p> */}
        
        <ContactDisplay />
        
        {/* Buttons for editing / deleting selected contact */}
        <section style={{ display: "flex", gap: "1rem" }}>
          <button className="button" onClick={() => setEditContactVisible(true)}>
            Edit
          </button>
          <button className="button red" onClick={() => deleteContact(selectedContact._id)}>
            Delete
          </button>
        </section>

      </main>

      {/* TODO Modal for adding new contacts */}

      {/* Modal for editing existing contacts */}
      <EditContactModal
        visible={isEditContactVisible}
        onClose={() => setEditContactVisible(false)}
      />
    </>
  );
}
