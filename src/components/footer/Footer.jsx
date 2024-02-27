import React from "react";
import styles from "./footer.module.css";
import logo from "../../../public/logonegro.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.horarios}>
          <h3>Horarios</h3>
          <div>Lunes a Viernes</div>
          <div>de 09:00 a 18:00</div>
        </div>
        <div className={styles.horarios}>
          <h3>Empresa</h3>
          <div>Importador y distribuidor mayorista.</div>
          <div>
            Sono Macchine distribuye e importa maquinaria para brindar
            soluciones de calidad a las diferentes industrias del pais.
          </div>
        </div>
        <div className={styles.contacto}>
          <h3>Contacto</h3>
          <li>
            <b>TEL:</b> 11-6999-7480 / 15-5712-2633
          </li>
          <li>
            <b>MAIL:</b> Sonomacchine@gmail.com
          </li>
          <li>
            <b>DIREC:</b> Gral.Acha 277 - Quilmes, Buenos Aires
          </li>
        </div>
      </div>

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

export default Footer;
