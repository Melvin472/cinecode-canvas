import {
  Code,
  Palette,
  Layout,
  Database,
  Film,
  Video,
  Camera,
  Sparkles,
  Lightbulb,
  Users,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";

const frontendSkills = [
  {
    icon: Code,
    title: "React & TypeScript",
    description: "Construction d'applications modernes et typées",
    level: 90,
  },
  {
    icon: Palette,
    title: "CSS & Tailwind",
    description: "Design responsive et animations fluides",
    level: 85,
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Interfaces intuitives et expériences mémorables",
    level: 80,
  },
  {
    icon: Database,
    title: "API & State Management",
    description: "Gestion des données et communication serveur",
    level: 75,
  },
];

const cinemaSkills = [
  {
    icon: Film,
    title: "Culture Cinématographique",
    description: "Connaissance approfondie du 7ème art",
    level: 95,
  },
  {
    icon: Video,
    title: "Montage Vidéo",
    description: "Notions de montage et storytelling visuel",
    level: 70,
  },
  {
    icon: Camera,
    title: "Composition Visuelle",
    description: "Sens du cadrage et de l'esthétique",
    level: 85,
  },
  {
    icon: Sparkles,
    title: "Direction Artistique",
    description: "Vision créative et cohérence visuelle",
    level: 80,
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

      {/* Frontend Skills */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Code className="w-6 h-6 text-code-green" />
            Développement Front-End
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {frontendSkills.map((skill, index) => (
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

      {/* Cinema Skills */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Film className="w-6 h-6 text-primary" />
            Cinéma & Audiovisuel
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cinemaSkills.map((skill, index) => (
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
