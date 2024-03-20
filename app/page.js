import Image from "next/image";
import styles from "./page.module.css";
import Intro from "./ui/intro";
import Navbar from "./ui/navbar";
import About from "./ui/about";
import Services from "./ui/services";
import Projects from "./ui/projects";
import CarouselUi from "./ui/caroussel";
import Partners from "./ui/partners";
import Contacts from "./ui/contacts";
import Footer from "./ui/footer";
import Passions from "./ui/passions";
import Link from "next/link";
import ScrollUp from "./ui/button/scrollUp";
import {
  dataEntreprise,
  dataIntro,
  dataAbout,
  dataServices,
  dataProjects,
  dataPassion,
  dataCarousel,
  dataStrategy,
  dataPartners,
  dataContact,
} from "./lib/data";

export default function Home() {
  return (
    <main className={styles.main}>
      <ScrollUp />
      <Navbar data={dataEntreprise} />
      <Intro data={dataIntro} />
      <About data={dataAbout} />
      <Services data={dataServices} />
      <Projects data={dataProjects} />
      <Passions data={dataPassion} />
      <CarouselUi data={dataCarousel} />
      <Passions data={dataStrategy} />

      <Partners data={dataPartners} />
      <Contacts data={dataContact} />
      <Footer data={dataEntreprise} />
    </main>
  );
}
