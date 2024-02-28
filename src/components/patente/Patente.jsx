import React from "react";
import styles from "./patente.module.css";
import Image from "next/image";
import logo from "../../../public/logonegro.png";
const Patente = () => {
  return (
    <div className={styles.container}>
      <div className={styles.derechos}>
        <div className={styles.fontsderechos}>
          ©2024 Sono Macchine. Todos los derechos reservados.
        </div>
        <div className={styles.logo}>
          <Image src={logo} width={150} />
        </div>
      </div>
    </div>
  );
};

export default Patente;
