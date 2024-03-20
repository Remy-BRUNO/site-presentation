import Image from "next/image";
import styles from "./projects.module.css";

export default function Projects({ data }) {
  const { title, description, info, projects } = data;
  return (
    <aside className={styles.aside} id="projects">
      <div className={styles.projects}>
        <h3>
          Les <u>projets</u> déjà réalisés
        </h3>
        <div>
          <p>{description}</p>
          <p>{info}</p>
        </div>
        <div className={styles.cards}>
          {projects.map((project, index) => {
            const { title, description, img, info } = project;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.divImg}>
                  <Image
                    className={styles.img}
                    alt={title}
                    src={img}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw"
                  />
                </div>
                <h4>
                  <u>{title}</u>
                </h4>
                <div>
                  <p>{description}</p>
                  <p>{info}</p>
                </div>
              </div>
            );
          })}

          {/* fin map */}
        </div>
      </div>
    </aside>
  );
}
