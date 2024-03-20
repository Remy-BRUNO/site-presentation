import styles from "./contacts.module.css";

export default function Contacts({ data }) {
  const {
    title,
    definition,
    info,
    coordonne: { name, adresse, mail, tel },
    card,
  } = data;

  return (
    <aside className={styles.aside} id="contact">
      <div className={styles.contacts}>
        <h3>{title}</h3>
        <div>
          <p>{definition}</p>
          <p>{info}</p>
        </div>
        <div className={styles.coordonne}>
          <div>
            <p>{name}</p>
            <p>{adresse}</p>
            <p>{mail}</p>
            <p>{tel}</p>
          </div>
          <div className={styles.visitCard}>{card}</div>
        </div>
      </div>
    </aside>
  );
}
