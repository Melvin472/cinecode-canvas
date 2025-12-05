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
} from "lucide-react";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";

const programmingSkills = [
  {
    icon: Code,
    title: "React & JavaScript",
    description: "Développement d'applications mobiles et web (Beatmoji)",
    level: 85,
  },
  {
    icon: Cpu,
    title: "Python",
    description: "Programmation robotique et asservissement PID",
    level: 90,
  },
  {
    icon: Gamepad2,
    title: "C++ & Unreal Engine",
    description: "Développement de jeux vidéo et environnements 3D",
    level: 75,
  },
  {
    icon: Smartphone,
    title: "React Native",
    description: "Applications mobiles iOS/Android",
    level: 80,
  },
];

const electronicsSkills = [
  {
    icon: CircuitBoard,
    title: "KICAD",
    description: "Conception de cartes électroniques (RTK GNSS)",
    level: 85,
  },
  {
    icon: Bluetooth,
    title: "Bluetooth & Capteurs",
    description: "Communication sans fil et acquisition de données",
    level: 80,
  },
  {
    icon: Cog,
    title: "Robotique & PID",
    description: "Asservissement et contrôle de robots autonomes",
    level: 90,
  },
];

const softSkills = [
  {
    icon: Lightbulb,
    title: "Créativité",
    description: "Capacité à innover et proposer des solutions originales",
    level: 90,
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travail d'équipe et communication efficace",
    level: 85,
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <FilmStrip className="absolute top-24 left-0 right-0 opacity-10" />
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Compétences"
            subtitle="Les outils de ma palette créative"
          />
        </div>
      </section>

      {/* Programming Skills */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Code className="w-6 h-6 text-code-green" />
            Programmation
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
            Électronique & Robotique
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
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
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
