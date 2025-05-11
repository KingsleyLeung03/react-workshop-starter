import clsx from "clsx";
import { DEFAULT_IMAGE } from "../util/image-utils";
import { getPhotoUrl } from "../util/image-utils";
import { Contact } from "@/definitions/Contact";

/**
 * A card / link to appear on the sidebar. When clicked, will allow the user to view
 * detailed info about that contact.
 */
export default function ContactListItem({contact}: {contact: Contact}) {
  return (
    <li className="contact-list-item">
      <img src={getPhotoUrl(contact.photoUrl)} />
      {contact.name}
    </li>
  );
}