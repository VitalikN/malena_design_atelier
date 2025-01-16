import About from '@/components/About';
import Collections from '@/components/Collections';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Faq from '@/components/Faq/Faq';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <Faq />
      <Services />
      <ContactForm />
      <Contact />
    </>
  );
}
