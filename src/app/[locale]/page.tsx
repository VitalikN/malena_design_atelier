import About from '@/components/About';
import Collections from '@/components/Collections';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Faq from '@/components/Faq/Faq';
import Footer from '@/components/Footer';
import Copyright from '@/components/Copyright/Copyright';
import Feedback from '@/components/Feedback/Feedback';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <Faq />
      <Services />
      <ContactForm />
      <Feedback />
      <Footer />
      <Copyright />
    </>
  );
}
