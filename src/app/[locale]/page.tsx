import About from "@/components/About";
import Collections from "@/components/Collections";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <Services />
      <Contact />
    </>
  );
}