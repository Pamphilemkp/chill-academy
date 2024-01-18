import DetailServices from "@/components/DetailServices";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Service from "@/components/Service";
import Image from "next/image";
import Faqs from "@/components/Faqs";


export default function Home() {
  return (
    <>
      <Hero />
      <Section />
      <Service/>
      <DetailServices/>
      <Faqs />
      <Footer />
    </>
  );
}
