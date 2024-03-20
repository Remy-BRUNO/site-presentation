import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer({ data }) {
  const { name, socialLinks } = data;
  return (
    <footer className={styles.footer}>
      <div className={styles.contentFooter}>
        <div className={styles.name}>
          <h2>{name}</h2>
          <div className={styles.socials}>
            {socialLinks.map((socialLink, index) => {
              const { name, logo, link } = socialLink;
              return (
                <div className={styles.social} key={index}>
                  <Link href={link}>
                    <Image src={logo} alt={name} width={50} height={50} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.bar}></div>
        <Link href={"/"}>Mentions légals</Link>
      </div>
    </footer>
  );
}
