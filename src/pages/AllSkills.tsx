import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { competencyGroups } from "@/data/competencyGroups";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Filter, Layers, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Extract all unique skills with their projects
const extractAllSkills = () => {
  const skillsMap = new Map<string, { name: string; projects: Array<{ slug: string; title: { fr: string; en: string }; level: number; image: string }> }>();
  
  competencyGroups.forEach(group => {
    group.projects.forEach(project => {
      project.skills.forEach(skill => {
        if (!skillsMap.has(skill.name)) {
          skillsMap.set(skill.name, { name: skill.name, projects: [] });
        }
        const existing = skillsMap.get(skill.name)!;
        // Avoid duplicates
        if (!existing.projects.find(p => p.slug === project.slug)) {
          existing.projects.push({
            slug: project.slug,
            title: project.title,
            level: skill.level,
            image: project.image,
          });
        }
      });
    });
  });
  
  return Array.from(skillsMap.values());
};

// Extract all unique projects
const extractAllProjects = () => {
  const projectsMap = new Map<string, { slug: string; title: { fr: string; en: string }; image: string; skills: Array<{ name: string; level: number }> }>();
  
  competencyGroups.forEach(group => {
    group.projects.forEach(project => {
      if (!projectsMap.has(project.slug)) {
        projectsMap.set(project.slug, {
          slug: project.slug,
          title: project.title,
          image: project.image,
          skills: [...project.skills],
        });
      } else {
        // Merge skills
        const existing = projectsMap.get(project.slug)!;
        project.skills.forEach(skill => {
          if (!existing.skills.find(s => s.name === skill.name)) {
            existing.skills.push(skill);
          }
        });
      }
    });
  });
  
  return Array.from(projectsMap.values());
};

// Skill icons mapping
const getSkillIcon = (skillName: string): string => {
  const icons: Record<string, string> = {
    "React": "⚛️",
    "React Native": "📱",
    "Python": "🐍",
    "C++": "💻",
    "C++ / Python": "💻",
    "JavaScript": "🟨",
    "TypeScript": "🔷",
    "Arduino": "🔌",
    "Bluetooth BLE": "📶",
    "KICAD": "🔧",
    "Unreal Engine": "🎮",
    "Godot Engine": "🎯",
    "GDScript": "📝",
    "Game Design": "🎲",
    "3D Environments": "🌐",
    "Architecture système": "🏗️",
    "Conception mécanique": "⚙️",
    "Conception PCB": "📟",
    "Électronique embarquée": "🔋",
    "Algorithmes PID": "📊",
    "RTK GNSS": "🛰️",
    "Tests BLE": "🧪",
    "Tests unitaires": "✅",
    "Tests physiques": "🔬",
    "Validation données": "📋",
    "Validation système": "🎯",
    "Debugging": "🐛",
    "Debugging wireless": "📡",
    "Calibration capteurs": "🎛️",
    "Optimisation PID": "📈",
    "Analyse de performance": "📉",
    "Version control": "🔀",
    "Documentation": "📚",
    "Gestion état": "🗂️",
    "API integration": "🔗",
    "Code refactoring": "♻️",
    "IoT protocols": "🌍",
    "Intégration capteurs": "🎚️",
    "Communication série": "🔌",
    "Firmware": "💾",
    "Travail d'équipe": "🤝",
    "Créativité": "💡",
    "Adaptabilité": "🔄",
    "Gestion de l'éclairage": "💡",
    "Cadrage": "🎬",
    "Écriture": "✍️",
    "Comédie": "🎭",
    "Direction photo": "📷",
    "React / Web": "🌐",
  };
  return icons[skillName] || "🔹";
};

const AllSkills = () => {
  const { language } = useLanguage();
  const [viewMode, setViewMode] = useState<"skills" | "projects">("skills");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  
  const allSkills = useMemo(() => extractAllSkills(), []);
  const allProjects = useMemo(() => extractAllProjects(), []);
  
  // Filter logic
  const filteredSkills = useMemo(() => {
    if (selectedProjects.length === 0) return allSkills;
    return allSkills.filter(skill => 
      skill.projects.some(p => selectedProjects.includes(p.slug))
    );
  }, [allSkills, selectedProjects]);
  
  const filteredProjects = useMemo(() => {
    if (selectedSkills.length === 0) return allProjects;
    return allProjects.filter(project =>
      project.skills.some(s => selectedSkills.includes(s.name))
    );
  }, [allProjects, selectedSkills]);
  
  const toggleSkill = (skillName: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillName) 
        ? prev.filter(s => s !== skillName)
        : [...prev, skillName]
    );
  };
  
  const toggleProject = (projectSlug: string) => {
    setSelectedProjects(prev =>
      prev.includes(projectSlug)
        ? prev.filter(p => p !== projectSlug)
        : [...prev, projectSlug]
    );
  };
  
  const clearFilters = () => {
    setSelectedSkills([]);
    setSelectedProjects([]);
  };
  
  const hasFilters = selectedSkills.length > 0 || selectedProjects.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-8 relative">
        <FilmStrip className="absolute top-24 left-0 right-0 opacity-10" />
        <div className="container mx-auto px-6">
          <Link 
            to="/skills" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "fr" ? "Retour aux compétences" : "Back to skills"}
          </Link>
          
          <SectionTitle
            title={language === "fr" ? "Toutes mes compétences" : "All my skills"}
            subtitle={
              language === "fr"
                ? "Explorez et filtrez mes compétences par projet"
                : "Explore and filter my skills by project"
            }
          />
        </div>
      </section>

      {/* View Toggle & Filters */}
      <section className="py-6 sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 p-1 bg-secondary rounded-lg">
              <button
                onClick={() => setViewMode("skills")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200",
                  viewMode === "skills" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                )}
              >
                <Layers className="w-4 h-4" />
                {language === "fr" ? "Par compétence" : "By skill"}
              </button>
              <button
                onClick={() => setViewMode("projects")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200",
                  viewMode === "projects" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                )}
              >
                <Filter className="w-4 h-4" />
                {language === "fr" ? "Par projet" : "By project"}
              </button>
            </div>
            
            {/* Active Filters */}
            {hasFilters && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">
                  {language === "fr" ? "Filtres:" : "Filters:"}
                </span>
                {selectedSkills.map(skill => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive/20"
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill} <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
                {selectedProjects.map(slug => {
                  const project = allProjects.find(p => p.slug === slug);
                  return (
                    <Badge 
                      key={slug} 
                      variant="outline"
                      className="cursor-pointer hover:bg-destructive/20"
                      onClick={() => toggleProject(slug)}
                    >
                      {project?.title[language]} <X className="w-3 h-3 ml-1" />
                    </Badge>
                  );
                })}
                <button 
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline ml-2"
                >
                  {language === "fr" ? "Tout effacer" : "Clear all"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Grid View */}
      <AnimatePresence mode="wait">
        {viewMode === "skills" && (
          <motion.section
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="py-12"
          >
            <div className="container mx-auto px-6">
              {/* Project filter chips */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-3">
                  {language === "fr" ? "Filtrer par projet :" : "Filter by project:"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {allProjects.map(project => (
                    <button
                      key={project.slug}
                      onClick={() => toggleProject(project.slug)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 text-sm",
                        selectedProjects.includes(project.slug)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <img 
                        src={project.image} 
                        alt="" 
                        className="w-5 h-5 rounded object-cover"
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                      />
                      {project.title[language]}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredSkills.map((skill, index) => {
                  const avgLevel = Math.round(
                    skill.projects.reduce((sum, p) => sum + p.level, 0) / skill.projects.length
                  );
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => toggleSkill(skill.name)}
                      className={cn(
                        "group relative p-4 bg-card rounded-xl border cursor-pointer transition-all duration-300",
                        "hover:border-primary/50 hover:shadow-lg hover:-translate-y-1",
                        selectedSkills.includes(skill.name) && "border-primary bg-primary/5"
                      )}
                    >
                      {/* Cinema corners */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/30 group-hover:border-primary group-hover:w-4 group-hover:h-4 transition-all duration-300" />
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/30 group-hover:border-primary group-hover:w-4 group-hover:h-4 transition-all duration-300" />
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/30 group-hover:border-primary group-hover:w-4 group-hover:h-4 transition-all duration-300" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/30 group-hover:border-primary group-hover:w-4 group-hover:h-4 transition-all duration-300" />
                      
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{getSkillIcon(skill.name)}</span>
                        <h3 className="font-semibold text-foreground">{skill.name}</h3>
                      </div>
                      
                      <div className="mb-3">
                        <Progress value={avgLevel} animated className="h-2" />
                        <p className="text-xs font-mono text-muted-foreground text-right mt-1">
                          {avgLevel}%
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {skill.projects.slice(0, 3).map(project => (
                          <img
                            key={project.slug}
                            src={project.image}
                            alt={project.title[language]}
                            title={project.title[language]}
                            className="w-6 h-6 rounded object-cover border border-border"
                            onError={(e) => (e.currentTarget.style.display = 'none')}
                          />
                        ))}
                        {skill.projects.length > 3 && (
                          <span className="text-xs text-muted-foreground flex items-center">
                            +{skill.projects.length - 3}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        )}

        {/* Projects Grid View */}
        {viewMode === "projects" && (
          <motion.section
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="py-12"
          >
            <div className="container mx-auto px-6">
              {/* Skills filter chips */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-3">
                  {language === "fr" ? "Filtrer par compétence :" : "Filter by skill:"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {allSkills.slice(0, 15).map(skill => (
                    <button
                      key={skill.name}
                      onClick={() => toggleSkill(skill.name)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 text-sm",
                        selectedSkills.includes(skill.name)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <span>{getSkillIcon(skill.name)}</span>
                      {skill.name}
                    </button>
                  ))}
                  {allSkills.length > 15 && (
                    <span className="text-sm text-muted-foreground flex items-center px-2">
                      +{allSkills.length - 15} {language === "fr" ? "autres" : "more"}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Projects Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => toggleProject(project.slug)}
                    className={cn(
                      "group relative bg-card rounded-xl border overflow-hidden cursor-pointer transition-all duration-300",
                      "hover:border-primary/50 hover:shadow-xl hover:-translate-y-1",
                      selectedProjects.includes(project.slug) && "border-primary ring-2 ring-primary/20"
                    )}
                  >
                    {/* Project Image */}
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title[language]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-foreground mb-3">
                        {project.title[language]}
                      </h3>
                      
                      {/* Skills list */}
                      <div className="space-y-2">
                        {project.skills.slice(0, 4).map(skill => (
                          <div key={skill.name} className="flex items-center gap-2">
                            <span className="text-sm">{getSkillIcon(skill.name)}</span>
                            <span className="text-sm text-foreground flex-1">{skill.name}</span>
                            <Progress value={skill.level} animated className="h-1.5 w-20" />
                            <span className="text-xs font-mono text-muted-foreground w-8">
                              {skill.level}%
                            </span>
                          </div>
                        ))}
                        {project.skills.length > 4 && (
                          <p className="text-xs text-muted-foreground">
                            +{project.skills.length - 4} {language === "fr" ? "autres compétences" : "more skills"}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default AllSkills;
