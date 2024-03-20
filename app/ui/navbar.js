import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar({ data }) {
  const { name } = data;
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.navLinks}>
        <Link href="#about" className={styles.navLink}>
          à propos
        </Link>
        <Link href="#services" className={styles.navLink}>
          Service
        </Link>
        <Link href="#projects" className={styles.navLink}>
          Les Projets
        </Link>
        <Link href="#partners" className={styles.navLink}>
          Partenaires
        </Link>
      </div>
      <Link href="#contact" className={styles.contact}>
        Contact
      </Link>
    </nav>
  );
}
