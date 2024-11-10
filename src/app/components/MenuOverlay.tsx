import React from "react";
import NavLink from "./NavLink";

// Link object ka type define karte hain
interface Link {
  path: string;
  title: string;
}

// MenuOverlay component ka props ka type define karte hain
interface MenuOverlayProps {
  links: Link[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
