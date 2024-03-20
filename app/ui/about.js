import Image from "next/image";
import styles from "./about.module.css";

export default function About({ data }) {
  const { name, definition, info } = data;
  return (
    <aside className={styles.aside} id="about">
      <div className={styles.about}>
        <div className={styles.text}>
          <h2>{name}</h2>
          <div className={styles.bar}></div>
          <h3>{definition}</h3>
          <p>{info}</p>
        </div>
        <Image
          className={styles.img}
          alt="café"
          src={"/cafe.webp"}
          width={340}
          height={374}
        />
      </div>
    </aside>
  );
}
