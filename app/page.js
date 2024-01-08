import DetailServices from "@/components/DetailServices";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section />
      <Service/>
      <DetailServices/>
      <Footer />
    </>
  );
}
