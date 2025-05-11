import clsx from "clsx";
import { DEFAULT_IMAGE } from "../util/image-utils";
import { getPhotoUrl } from "../util/image-utils";
import { Contact } from "@/definitions/Contact";

/**
 * A card / link to appear on the sidebar. When clicked, will allow the user to view
 * detailed info about that contact.
 */
export default function ContactListItem({contact, onContactClick, isActive}: 
  {contact: Contact, onContactClick: (contact: Contact) => void, isActive: boolean}) {

  function handleClick() {
    onContactClick(contact);
  }

  return (
    <li className={clsx("contact-list-item", isActive && "active")} onClick={handleClick}>
      <img src={getPhotoUrl(contact.photoUrl)} />
      {contact.name}
    </li>
  );
}