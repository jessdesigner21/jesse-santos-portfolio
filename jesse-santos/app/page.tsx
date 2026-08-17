import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import DisciplinesSection from "@/components/DisciplinesSection";
import MotionSection from "@/components/MotionSection";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <DisciplinesSection />
      <MotionSection />
      <ClientsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
