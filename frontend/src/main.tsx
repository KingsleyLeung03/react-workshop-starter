import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import ContactsContextProvider from "./context/ContactsContextProvider";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ContactsContextProvider>
        <App />
      </ContactsContextProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
