import GraphicProjectsHero from "@/components/shared/GraphicProjectsHero";
import GraphicProjectsList from "@/components/shared/GraphicProjectsList";
import NavigationGridSection from "@/components/shared/NavigationGridSection";
import ProjectsContainer from "./ProjectsContainer";

export default function GraphicProjectsPage() {
  return (
    <main>
      <ProjectsContainer>
        <GraphicProjectsHero />
        <GraphicProjectsList />
      </ProjectsContainer>
      <NavigationGridSection />
    </main>
  );
}
