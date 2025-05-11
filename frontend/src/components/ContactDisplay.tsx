import { getPhotoUrl } from "../util/image-utils";
import { DEFAULT_IMAGE } from "../util/image-utils";
import { Contact } from "../definitions/Contact";

export default function ContactDisplay({ contact }: { contact: Contact }) {
  // const contact = props.contact;
  console.debug(contact);

  const { photoUrl, name, phoneNumber, funFact } = contact;

  return (
    <section className={"contact-display"}>
      <img src={getPhotoUrl(photoUrl)} />
      <h1>{name}</h1>
      <h3>{phoneNumber}</h3>
      <p>Fun fact: {funFact}</p>
    </section>
  );
}