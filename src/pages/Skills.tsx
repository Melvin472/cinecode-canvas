import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";
import CompetencyGroupCard from "@/components/CompetencyGroupCard";
import ProjectSkillsCard from "@/components/ProjectSkillsCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { competencyGroups, CompetencyGroup } from "@/data/competencyGroups";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const calculateGroupAverage = (group: CompetencyGroup): number => {
  const allSkills = group.projects.flatMap((p) => p.skills);
  if (allSkills.length === 0) return 0;
  const total = allSkills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / allSkills.length);
};

// Colors for comparison mode
const COMPARISON_COLORS = [
  "hsl(var(--primary))",
  "hsl(142, 76%, 45%)", // green
  "hsl(217, 91%, 60%)", // blue
  "hsl(280, 65%, 60%)", // purple
  "hsl(38, 92%, 50%)",  // orange
];

const Skills = () => {
  const { t, language } = useLanguage();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const selectedGroup = competencyGroups.find((g) => g.id === activeGroup);

  // Filter only the 4 university competencies for radar chart
  const universityCompetencies = competencyGroups.filter(
    (g) => ["concevoir", "verifier", "maintenir", "implanter"].includes(g.id)
  );

  // Get all unique projects from university competencies
  const allProjects = useMemo(() => {
    const projectMap = new Map<string, { slug: string; title: { fr: string; en: string }; image: string }>();
    universityCompetencies.forEach((group) => {
      group.projects.forEach((project) => {
        if (!projectMap.has(project.slug)) {
          projectMap.set(project.slug, {
            slug: project.slug,
            title: project.title,
            image: project.image,
          });
        }
      });
    });
    return Array.from(projectMap.values());
  }, []);

  // Calculate project score per competency group
  const getProjectScoreForGroup = (projectSlug: string, groupId: string): number => {
    const group = universityCompetencies.find((g) => g.id === groupId);
    if (!group) return 0;
    const project = group.projects.find((p) => p.slug === projectSlug);
    if (!project) return 0;
    const avgSkill = project.skills.reduce((sum, s) => sum + s.level, 0) / project.skills.length;
    return Math.round(avgSkill);
  };

  // Prepare radar chart data for comparison mode
  const comparisonRadarData = useMemo(() => {
    if (!comparisonMode || selectedProjects.length === 0) return [];
    
    return universityCompetencies.map((group) => {
      const dataPoint: Record<string, string | number> = {
        competency: group.title[language],
      };
      selectedProjects.forEach((slug) => {
        dataPoint[slug] = getProjectScoreForGroup(slug, group.id);
      });
      return dataPoint;
    });
  }, [comparisonMode, selectedProjects, language]);

  // Prepare radar chart data for global view
  const radarData = useMemo(() => {
    return universityCompetencies.map((group) => ({
      competency: group.title[language],
      value: calculateGroupAverage(group),
      fullMark: 100,
    }));
  }, [language]);

  // Toggle project selection
  const toggleProjectSelection = (slug: string) => {
    setSelectedProjects((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : prev.length < 5
        ? [...prev, slug]
        : prev
    );
  };

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

      {/* Radar Chart & Competency Groups */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Radar Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 bg-card border border-border rounded-xl p-6"
            >
              {/* Mode Toggle */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-sans text-lg font-semibold text-foreground">
                  {comparisonMode
                    ? language === "fr"
                      ? "Comparaison"
                      : "Comparison"
                    : language === "fr"
                    ? "Vue globale"
                    : "Global Overview"}
                </h3>
                <Button
                  variant={comparisonMode ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setComparisonMode(!comparisonMode);
                    if (!comparisonMode) setSelectedProjects([]);
                  }}
                  className="gap-2"
                >
                  <BarChart3 className="w-4 h-4" />
                  {language === "fr" ? "Comparer" : "Compare"}
                </Button>
              </div>

              {/* Project Selection for Comparison */}
              <AnimatePresence>
                {comparisonMode && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4 overflow-hidden"
                  >
                    <p className="text-xs text-muted-foreground mb-2">
                      {language === "fr"
                        ? "Sélectionnez jusqu'à 5 projets à comparer :"
                        : "Select up to 5 projects to compare:"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                      {allProjects.map((project, index) => {
                        const isSelected = selectedProjects.includes(project.slug);
                        const colorIndex = selectedProjects.indexOf(project.slug);
                        return (
                          <Badge
                            key={project.slug}
                            variant={isSelected ? "default" : "outline"}
                            className="cursor-pointer text-xs transition-all hover:scale-105"
                            style={
                              isSelected
                                ? {
                                    backgroundColor: COMPARISON_COLORS[colorIndex],
                                    borderColor: COMPARISON_COLORS[colorIndex],
                                  }
                                : {}
                            }
                            onClick={() => toggleProjectSelection(project.slug)}
                          >
                            {project.title[language]}
                            {isSelected && <X className="w-3 h-3 ml-1" />}
                          </Badge>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Radar Chart */}
              <div className="w-full aspect-square max-w-[300px] mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    data={comparisonMode && selectedProjects.length > 0 ? comparisonRadarData : radarData}
                    margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
                  >
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis
                      dataKey="competency"
                      tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }}
                      tickLine={false}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                      tickCount={5}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--foreground))",
                      }}
                      formatter={(value: number, name: string) => {
                        const projectName = allProjects.find((p) => p.slug === name)?.title[language] || name;
                        return [`${value}%`, projectName];
                      }}
                    />
                    {comparisonMode && selectedProjects.length > 0 ? (
                      selectedProjects.map((slug, index) => (
                        <Radar
                          key={slug}
                          name={slug}
                          dataKey={slug}
                          stroke={COMPARISON_COLORS[index]}
                          fill={COMPARISON_COLORS[index]}
                          fillOpacity={0.15}
                          strokeWidth={2}
                        />
                      ))
                    ) : (
                      <Radar
                        name={language === "fr" ? "Compétences" : "Skills"}
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                    )}
                    {comparisonMode && selectedProjects.length > 1 && (
                      <Legend
                        formatter={(value: string) =>
                          allProjects.find((p) => p.slug === value)?.title[language] || value
                        }
                        wrapperStyle={{ fontSize: "10px" }}
                      />
                    )}
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                {comparisonMode
                  ? selectedProjects.length === 0
                    ? language === "fr"
                      ? "Sélectionnez des projets ci-dessus"
                      : "Select projects above"
                    : language === "fr"
                    ? `${selectedProjects.length} projet(s) comparé(s)`
                    : `${selectedProjects.length} project(s) compared`
                  : language === "fr"
                  ? "Moyennes des 4 compétences universitaires"
                  : "Averages of 4 university competencies"}
              </p>
            </motion.div>

            {/* Competency Group Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {competencyGroups.map((group, index) => {
                const isPalettesCreatives = group.id === "palettes-creatives";
                const shouldLinkToAllSkills = isPalettesCreatives;

                return (
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
                      groupId={group.id}
                      linkToAllSkills={shouldLinkToAllSkills}
                      onClick={() =>
                        setActiveGroup(activeGroup === group.id ? null : group.id)
                      }
                    />
                  </div>
                );
              })}
            </div>
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
                                justification={project.justification[language]}
                                competencyGroup={{
                                  title: selectedGroup.title[language],
                                  icon: selectedGroup.icon,
                                  color: selectedGroup.color,
                                  levelLabel: selectedGroup.levelLabels[language][project.level - 1],
                                }}
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
