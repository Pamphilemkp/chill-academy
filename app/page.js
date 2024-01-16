import DetailServices from "@/components/DetailServices";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Service from "@/components/Service";
import Image from "next/image";
import Faqs from "@/components/Faqs";
import Services from "@/components/Services";
import Partners from "@/components/Partners";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <Service/>
      <DetailServices/>
      <Faqs />
      <div className=" bg-gradient-to-r from-purple-500 to-blue-800 border border-purple-600 ">
        <Services />
        <Partners />
      </div>
      <Footer />
    </>
  );
}
