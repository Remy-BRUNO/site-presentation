import Image from "next/image";
import styles from "./partners.module.css";

export default function Partners({ data }) {
  const { title, definition, info, partners } = data;
  return (
    <aside className={styles.aside} id="partners">
      <div className={styles.partners}>
        <h3>{title}</h3>
        <div>
          <p>{definition}</p>
          <p>{info}</p>
        </div>

        <div className={styles.partnersLogo}>
          {partners.map((partner, index) => {
            const { name, logo } = partner;
            return (
              <div key={index} className={styles.logo}>
                <Image src={logo} alt={name} width={100} height={100} />
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
