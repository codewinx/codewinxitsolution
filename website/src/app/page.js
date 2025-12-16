import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <section id="home" className="scroll-mt-24">
        <HeroSection />
      </section>

      <section id="about" className="min-h-screen px-6 py-24 scroll-mt-24">
        <AboutSection />
      </section>

      <section id="services" className="min-h-screen px-6 py-24 scroll-mt-24">
        <ServicesSection />
      </section>

      <section id="contact" className="min-h-screen px-6 py-24 scroll-mt-24">
        <ContactSection />
      </section>
    </>
  );
}
