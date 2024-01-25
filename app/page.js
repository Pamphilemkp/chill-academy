import DetailServices from "@/components/DetailServices";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Service from "@/components/Service";
import Image from "next/image";
import HomeFaqs from "@/components/HomeFaqs";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <Section />
      <Service />
      <DetailServices />
      <HomeFaqs />
      <div className=" bg-gradient-to-r from-purple-500 to-blue-800 border border-purple-600 ">
        <Services />
        <Partners />
      </div>
      <Contact/>
      <Footer />
    </>
  );
}
