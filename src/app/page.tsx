import { Cta } from "@/widgets/layout/Cta/Cta";
import { Faq } from "@/widgets/home/Faq/Faq";
import { Testimonals } from "@/widgets/home/Testimonals/Testimonals";
import { Hero } from "@/widgets/home/Hero/Hero";
import { TechStack } from "@/widgets/home/TechStack/TechStack";
import { WhyChooseUs } from "@/widgets/home/WhyChooseUs/WhyChooseUs";
import { Cases } from "@/widgets/home/Cases/Cases";
import { Form } from "@/widgets/home/Form/Form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      {/* <TechStack /> */}
      <Cases />
      {/* <WhyChooseUs /> */}
      {/* <Testimonals /> */}
      {/* <Faq /> */}
      {/* <Form /> */}
      <Cta />
    </main>
  );
}
