import type { Metadata } from "next";
import HeroSection from "@/components/hero/section";
import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/projects/section";
import Ellipse from "@/components/shared/ellipse";
import TechStackSection from "@/components/techstack/section";

export const metadata: Metadata = {
  title: "Cirilo Bucatcat Jr. - Full Stack Web Developer",
  description: "A Fullstack Web Developer from the Philippines",
};

export default function Home() {
  return (<>
    <header className="z-50 sticky top-7.5 ">
      <Navigation />
    </header>
    <main className="z-30 w-full">
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
    </main>
    <Ellipse ellipseClass={"-top-20 -left-50"} />
    <Ellipse ellipseClass={"size-111.25 top-230 -right-50"} />
    <Ellipse ellipseClass={"size-80.5 top-430 left-20"} />
  </>);
}
