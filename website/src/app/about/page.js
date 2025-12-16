import AboutSection from "@/components/sections/AboutSection";

export const metadata = {
  title: "About Us | CodeWinX IT Solutions",
  description: "Learn more about CodeWinX IT Solutions.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-24">
      <AboutSection />
    </section>
  );
}
