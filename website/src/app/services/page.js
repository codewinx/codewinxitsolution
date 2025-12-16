import ServicesSection from "@/components/sections/ServicesSection";

export const metadata = {
  title: "Services | CodeWinX IT Solutions",
  description: "Our software and web development services.",
};

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-6 py-24">
      <ServicesSection />
    </section>
  );
}
