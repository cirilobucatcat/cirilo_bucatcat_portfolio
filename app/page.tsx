import HeroSection from "@/components/hero/section";
import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/projects/section";
import Ellipse from "@/components/shared/ellipse";

export default function Home() {
  return (<>
    <header className="z-50 sticky top-7.5 ">
      <Navigation />
    </header>
    <main className="z-30 w-full h-screen">
      <HeroSection />
      <ProjectsSection />
    </main>
    <Ellipse ellipseClass={"-top-50 -left-60"} />
    <Ellipse ellipseClass={"size-111.25 top-230 -right-50"} />
    <Ellipse ellipseClass={"size-80.5 top-100 -left-50"} />
  </>);
}
