import { DEFAULT_IMAGE } from "../util/image-utils";

export default function ContactDisplay() {
  return (
    <section className={"contact-display"}>
      <img src={DEFAULT_IMAGE} alt="Default" />
      <h1>Contact name gores here</h1>
      <h3>555-1234</h3>
      <p>Fun fact: This is some dummy data</p>
    </section>
  );
}