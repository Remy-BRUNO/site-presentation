import styles from "./intro.module.css";

export default function Intro({ data }) {
  return (
    <aside className={styles.intro}>
      <h2 className={styles.title}>PATISSERIES</h2>
      <h2 className={styles.title}>
        <span className={styles.noColor}>PATISSERIES</span>
      </h2>
      <h2 className={styles.title}>
        <span className={styles.noColor}>PATIS</span>SERIES
      </h2>
      <h2 className={styles.title}>
        <span className={styles.noColor}>PATISSERIES</span>
      </h2>
      <h2 className={styles.title}>PATISSERIES</h2>
    </aside>
  );
}
