import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";
import { AnimatedCard } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/projects";

const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navigation />
      <div className="pt-24">
        <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedCard key={project.slug} index={index}>
                <ProjectCard
                  slug={project.slug}
                  title={project.title[language]}
                  description={project.description[language]}
                  image={project.image}
                  tags={project.tags[language]}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              </AnimatedCard>
            ))}
          </div>
        </div>
        <FilmStrip />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
