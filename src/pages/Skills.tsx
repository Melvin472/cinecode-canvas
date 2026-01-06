import { useState } from "react";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";
import CompetencyGroupCard from "@/components/CompetencyGroupCard";
import ProjectSkillsCard from "@/components/ProjectSkillsCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { competencyGroups } from "@/data/competencyGroups";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const { t, language } = useLanguage();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const selectedGroup = competencyGroups.find((g) => g.id === activeGroup);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <FilmStrip className="absolute top-24 left-0 right-0 opacity-10" />
        <div className="container mx-auto px-6">
          <SectionTitle
            title={t.skills.title}
            subtitle={
              language === "fr"
                ? "Les outils de ma palette créative"
                : "The tools of my creative palette"
            }
          />
        </div>
      </section>

      {/* Competency Groups */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {competencyGroups.map((group, index) => (
              <div
                key={group.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CompetencyGroupCard
                  title={group.title[language]}
                  description={group.description[language]}
                  icon={group.icon}
                  color={group.color}
                  isActive={activeGroup === group.id}
                  onClick={() =>
                    setActiveGroup(activeGroup === group.id ? null : group.id)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Skills Display */}
      <AnimatePresence mode="wait">
        {selectedGroup && (
          <motion.section
            key={selectedGroup.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="pb-16"
          >
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-3 mb-8">
                <selectedGroup.icon
                  className={`w-8 h-8 ${selectedGroup.color}`}
                />
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {language === "fr"
                    ? "Projets & Compétences"
                    : "Projects & Skills"}
                  {" - "}
                  {selectedGroup.title[language]}
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedGroup.projects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectSkillsCard
                      slug={project.slug}
                      title={project.title[language]}
                      image={project.image}
                      skills={project.skills}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {!selectedGroup && (
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg">
                {language === "fr"
                  ? "Cliquez sur un groupe de compétences pour voir les projets associés"
                  : "Click on a competency group to see related projects"}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Quote */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="font-display text-xl md:text-2xl italic text-foreground mb-4">
              "Le cinéma, c'est l'écriture moderne dont l'encre est la lumière."
            </p>
            <cite className="font-mono text-sm text-primary">
              — Jean Cocteau
            </cite>
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;
