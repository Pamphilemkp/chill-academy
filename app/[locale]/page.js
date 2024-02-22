import DetailServices from "@/components/DetailServices";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Service from "@/components/Service";
import HomeFaqs from "@/components/HomeFaqs";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '../i18n';

const i18nNamespaces = ['HomePage'];

export default async function Home({ params: { locale } }) {

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
    namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Hero />
      <Section />
      <Service />
      <DetailServices />
      <HomeFaqs />
      <div >
        <Services />
        <Partners />
      </div>
      <Contact/>
      <Footer />
    </TranslationsProvider>
  );
}
