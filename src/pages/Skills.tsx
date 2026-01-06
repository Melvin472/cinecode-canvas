import { useState } from "react";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";
import CompetencyGroupCard from "@/components/CompetencyGroupCard";
import ProjectSkillsCard from "@/components/ProjectSkillsCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { competencyGroups, CompetencyGroup } from "@/data/competencyGroups";
import { motion, AnimatePresence } from "framer-motion";

const calculateGroupAverage = (group: CompetencyGroup): number => {
  const allSkills = group.projects.flatMap((p) => p.skills);
  if (allSkills.length === 0) return 0;
  const total = allSkills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / allSkills.length);
};

const Skills = () => {
  const { t, language } = useLanguage();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const selectedGroup = competencyGroups.find((g) => g.id === activeGroup);

  // Group projects by level
  const getProjectsByLevel = (group: CompetencyGroup) => {
    const levels: { [key: number]: typeof group.projects } = {};
    for (let i = 1; i <= group.maxLevels; i++) {
      levels[i] = group.projects.filter((p) => p.level === i);
    }
    return levels;
  };

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
                  averageLevel={calculateGroupAverage(group)}
                  onClick={() =>
                    setActiveGroup(activeGroup === group.id ? null : group.id)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Skills Display by Level */}
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
                <h3 className="font-sans text-2xl font-semibold text-foreground">
                  {language === "fr"
                    ? "Projets & Compétences"
                    : "Projects & Skills"}
                  {" - "}
                  {selectedGroup.title[language]}
                </h3>
              </div>

              {/* Display by levels */}
              <div className="space-y-10">
                {Object.entries(getProjectsByLevel(selectedGroup)).map(
                  ([levelNum, projects]) => {
                    if (projects.length === 0) return null;
                    const levelIndex = parseInt(levelNum) - 1;
                    const levelLabel =
                      selectedGroup.levelLabels[language][levelIndex];

                    return (
                      <motion.div
                        key={levelNum}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: levelIndex * 0.15 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-px flex-1 bg-border" />
                          <span className="font-sans text-lg font-medium text-foreground px-4 py-1 bg-secondary rounded-full">
                            {levelLabel}
                          </span>
                          <div className="h-px flex-1 bg-border" />
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {projects.map((project, index) => (
                            <motion.div
                              key={project.slug}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: levelIndex * 0.15 + index * 0.1,
                              }}
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
                      </motion.div>
                    );
                  }
                )}
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
            <p className="font-sans text-xl md:text-2xl italic text-foreground mb-4">
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
