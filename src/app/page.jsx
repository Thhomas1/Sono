import Image from "next/image";
import styles from "./page.module.css";
import construction from "../../public/logonegro.png";
import imagehome from "../../public/imagehomepage.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Los mejores haciendo maquinas para sus clientes.
        </h1>
        <p className={styles.desc}>
          Convertimos tus suenitos en realidad gracias a nuestras maquinas.
        </p>
        <button className={styles.button} href="/contact">
          Contactanos
        </button>
      </div>
      <div>
        <Image className={styles.img} src={imagehome} alt=""></Image>
      </div>
    </div>
  );
}
// 55:00
