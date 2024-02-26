import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Inicio",
    url: "/",
  },
  {
    id: 2,
    title: "Equipos",
    url: "/equipment",
  },
  {
    id: 3,
    title: "Nosotros",
    url: "/aboutUs",
  },
  {
    id: 4,
    title: "Contacto",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div>
      <Link href="/">Sono Machine</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
