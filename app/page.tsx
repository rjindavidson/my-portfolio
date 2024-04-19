import AboutSection from "@/components/about";
import HeroSection from "@/components/hero";
import ProjectSection from "@/components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 bg-slate-800 md:px-24 md:py-12">
      <HeroSection title="I'm Ryan Davidson"/>
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
