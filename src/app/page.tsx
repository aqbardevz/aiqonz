import { Faq } from "@/widgets/home/Faq/Faq";
import { Testimonals } from "@/widgets/home/Testimonals/Testimonals";
import { Hero } from "@/widgets/home/Hero/Hero";
import { WhyChooseUs } from "@/widgets/home/WhyChooseUs/WhyChooseUs";
import { Cases } from "@/widgets/home/Cases/Cases";
import { Form } from "@/widgets/home/Form/Form";
import { Services } from "@/widgets/home/Services/Services";
import { Team } from "@/widgets/home/Team/Team";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <Cases />
      {/* <WhyChooseUs /> */}
      {/* <Team /> */}
      <Form />
      <Testimonals />
      <Faq />
    </main>
  );
}
