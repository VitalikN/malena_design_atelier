import About from '@/components/About';
import Collections from '@/components/Collections';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Faq from '@/components/Faq/Faq';
import Footer from '@/components/Footer';
import Copyright from '@/components/Copyright/Copyright';
import Feedback from '@/components/Feedback/Feedback';

export async function generateMetadata() {
  const baseUrl = 'https://malena-design-atelier.vercel.app';

  return {
    title: 'Malena Design Atelier - Wedding, Evening, and Casual Dresses',
    description:
      'Discover premium wedding, evening, and casual dresses at Malena Design Atelier. We offer sales, rentals, and tailoring services for all occasions.',
    alternates: {
      canonical: `${baseUrl}`,
      languages: {
        'en-US': `${baseUrl}/en-US/`,
        'ru-RU': `${baseUrl}/ru-RU/`,
        'uk-UA': `${baseUrl}/uk-UA/`,
        'cs-CZ': `${baseUrl}/cs-CZ/`,
      },
    },
    openGraph: {
      title: 'Malena Design Atelier - Dresses for Every Occasion',
      description:
        'Discover premium wedding, evening, and casual dresses at Malena Design Atelier. Services include sales, rentals, and tailoring to meet your unique needs.',
      url: `${baseUrl}`,
      images: [
        {
          url: `${baseUrl}/openGraph.JPG`,
          width: 1200,
          height: 630,
          alt: 'Wedding and evening dresses',
        },
      ],
      type: 'website',
    },
  };
}

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
