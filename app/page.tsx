import type { Metadata } from "next";
import HeroSection from "@/components/hero/section";
import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/projects/section";
import Ellipse from "@/components/shared/ellipse";
import TechStackSection from "@/components/techstack/section";
import ContactSection from "@/components/contact/section";

export const metadata: Metadata = {
  title: "Cirilo Bucatcat Jr. - Full Stack Web Developer",
  description: "A Fullstack Web Developer from the Philippines",
};

export default function Home() {
  return (<>
    <header className="z-50 fixed lg:sticky lg:top-10">
      <Navigation />
    </header>
    <main className="z-30 w-full">
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>
    <Ellipse ellipseClass={"size-80 lg:size-111.25 -top-100 -left-10 lg:-top-20 lg:-left-50"} />
    <Ellipse ellipseClass={"size-50 lg:size-111.25 top-230 right-0 lg:-right-50"} />
    <Ellipse ellipseClass={"size-30 lg:size-80.5 top-430 lg:left-20"} />
    <Ellipse ellipseClass={"size-40 lg:size-60 top-700 left-10 lg:left-150"} />
  </>);
}
