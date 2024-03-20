import styles from "./passions.module.css";

export default function Passions({ data }) {
  const { title, definition, info } = data;
  return (
    <aside className={styles.aside}>
      <div className={styles.passions}>
        <h3>{title}</h3>
        <div className={styles.bar}></div>
        <div>
          <p>{definition}</p>
          <p>{info}</p>
        </div>
      </div>
    </aside>
  );
}
