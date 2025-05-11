import clsx from "clsx";
import { DEFAULT_IMAGE } from "../util/image-utils";

/**
 * A card / link to appear on the sidebar. When clicked, will allow the user to view
 * detailed info about that contact.
 */
export default function ContactListItem() {
  return (
    <li className="contact-list-item">
      <img src={DEFAULT_IMAGE} />
      My Contact
    </li>
  );
}