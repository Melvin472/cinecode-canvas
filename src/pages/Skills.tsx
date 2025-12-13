import {
  Code,
  Cpu,
  Smartphone,
  Gamepad2,
  Bluetooth,
  CircuitBoard,
  Cog,
  Sparkles,
  Lightbulb,
  Users,
  Target,
  Clock,
  Brain,
  MessageCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t, language } = useLanguage();

  const programmingSkills = [
    {
      icon: Code,
      title: "React & JavaScript",
      description: language === "fr" 
        ? "Développement d'applications mobiles et web (Beatmoji)"
        : "Mobile and web application development (Beatmoji)",
      level: 85,
    },
    {
      icon: Cpu,
      title: "Python",
      description: language === "fr"
        ? "Programmation robotique et asservissement PID"
        : "Robotic programming and PID control",
      level: 90,
    },
    {
      icon: Gamepad2,
      title: "C++ & Unreal Engine",
      description: language === "fr"
        ? "Développement de jeux vidéo et environnements 3D"
        : "Video game development and 3D environments",
      level: 75,
    },
    {
      icon: Smartphone,
      title: "React Native",
      description: language === "fr"
        ? "Applications mobiles iOS/Android"
        : "iOS/Android mobile applications",
      level: 80,
    },
  ];

  const electronicsSkills = [
    {
      icon: CircuitBoard,
      title: "KICAD",
      description: language === "fr"
        ? "Conception de cartes électroniques (RTK GNSS)"
        : "Electronic board design (RTK GNSS)",
      level: 85,
    },
    {
      icon: Bluetooth,
      title: language === "fr" ? "Bluetooth & Capteurs" : "Bluetooth & Sensors",
      description: language === "fr"
        ? "Communication sans fil et acquisition de données"
        : "Wireless communication and data acquisition",
      level: 80,
    },
    {
      icon: Cog,
      title: language === "fr" ? "Robotique & PID" : "Robotics & PID",
      description: language === "fr"
        ? "Asservissement et contrôle de robots autonomes"
        : "Control and automation of autonomous robots",
      level: 90,
    },
  ];

  const softSkills = [
    {
      icon: Lightbulb,
      title: language === "fr" ? "Créativité" : "Creativity",
      description: language === "fr"
        ? "Capacité à innover et proposer des solutions originales"
        : "Ability to innovate and propose original solutions",
      level: 90,
    },
    {
      icon: Users,
      title: language === "fr" ? "Travail d'équipe" : "Teamwork",
      description: language === "fr"
        ? "Collaboration efficace et partage des connaissances"
        : "Effective collaboration and knowledge sharing",
      level: 85,
    },
    {
      icon: Target,
      title: language === "fr" ? "Résolution de problèmes" : "Problem Solving",
      description: language === "fr"
        ? "Analyse et résolution méthodique des défis techniques"
        : "Methodical analysis and resolution of technical challenges",
      level: 88,
    },
    {
      icon: Clock,
      title: language === "fr" ? "Gestion du temps" : "Time Management",
      description: language === "fr"
        ? "Organisation et respect des délais de projet"
        : "Organization and meeting project deadlines",
      level: 82,
    },
    {
      icon: Brain,
      title: language === "fr" ? "Adaptabilité" : "Adaptability",
      description: language === "fr"
        ? "Apprentissage rapide de nouvelles technologies"
        : "Quick learning of new technologies",
      level: 90,
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: language === "fr"
        ? "Expression claire des idées techniques et non-techniques"
        : "Clear expression of technical and non-technical ideas",
      level: 85,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <FilmStrip className="absolute top-24 left-0 right-0 opacity-10" />
        <div className="container mx-auto px-6">
          <SectionTitle
            title={t.skills.title}
            subtitle={language === "fr" ? "Les outils de ma palette créative" : "The tools of my creative palette"}
          />
        </div>
      </section>

      {/* Programming Skills */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Code className="w-6 h-6 text-code-green" />
            {t.skills.programming}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {programmingSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electronics Skills */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <CircuitBoard className="w-6 h-6 text-primary" />
            {t.skills.electronics}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {electronicsSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-cinema-red" />
            {t.skills.softSkills}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="font-display text-xl md:text-2xl italic text-foreground mb-4">
              "Le cinéma, c'est l'écriture moderne dont l'encre est la lumière."
            </p>
            <cite className="font-mono text-sm text-primary">— Jean Cocteau</cite>
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;
