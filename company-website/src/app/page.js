import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import CareerSection from "@/components/CareerSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>
         
        <section id="services">
          <ServicesSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <section id="career">
          <CareerSection />
        </section>
      </main>

      <Footer />
    </>
  );
}
