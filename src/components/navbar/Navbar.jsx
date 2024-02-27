import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import logo from "../../../public/logogris.png";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

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
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} width={150} />
      </div>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/thomas-romero-05a508245/">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.linkedin.com/in/thomas-romero-05a508245/">
          <AiOutlineLinkedin />
        </a>
        <a href="https://www.linkedin.com/in/thomas-romero-05a508245/">
          <AiOutlineTwitter />
        </a>
      </div>
      <div className={styles.links}>
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
