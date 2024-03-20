import styles from "./service.module.css";
export default function Services({ data }) {
  const { title, description, info, services } = data;
  return (
    <aside className={styles.aside} id="services">
      <div className={styles.services}>
        <h3>{title}</h3>
        <div className={styles.text}>
          <p>{description}</p>
          <p>{info}</p>
        </div>
        <div className={styles.serviceListes}>
          {services.map((service, index) => {
            const { type, lists } = service;
            return (
              <div key={index}>
                <h4>{type}</h4>
                <div className={styles.bar}></div>
                <ul className={styles.liste}>
                  {lists.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
