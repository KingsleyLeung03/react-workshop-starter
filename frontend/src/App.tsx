import { DEFAULT_IMAGE } from "./util/image-utils";
import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { INITIAL_CONTACTS } from "./data/initial-contacts";

export default function App() {
  return (
    <>
      {/* TODO Add sidebar here */}
      <Sidebar contacts={INITIAL_CONTACTS} />

      <main className="main-area">
        {/* TODO Contact display goes here */}
        {/* <h1>Hello, WDCC! 🐮💻</h1>
        <p>My first paragraph</p> */}
        
        <ContactDisplay contact={INITIAL_CONTACTS[0]}/>
        

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
