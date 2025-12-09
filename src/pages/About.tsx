import { GraduationCap, Briefcase, Calendar, MapPin, Film, Code, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import FilmStrip from "@/components/FilmStrip";
import { AnimatedCard } from "@/hooks/useScrollAnimation";

const education = [
  {
    period: "2022 - 2025",
    title: "BUT GEII (Génie Électrique et Informatique Industrielle)",
    institution: "IUT de Toulon",
    location: "Toulon, France",
    description: "Formation en électronique, informatique industrielle, automatisme et robotique. Spécialisation en systèmes embarqués et programmation.",
  },
  {
    period: "2022",
    title: "Baccalauréat STI2D",
    institution: "Lycée Rouvière",
    location: "Toulon, France",
    description: "Spécialité Sciences et Technologies de l'Industrie et du Développement Durable. Option SIN (Systèmes d'Information et Numérique).",
  },
];

const experience = [
  {
    period: "2024",
    title: "Stage - Prolexia",
    role: "Développeur Robotique",
    location: "France",
    description: "Tests et validation physiques pour la gestion du robot Oscar. Optimisation de l'asservissement PID, conception de carte électronique KICAD pour géolocalisation avec RTK GNSS et intégration des capteurs.",
    technologies: ["Python", "KICAD", "RTK GNSS", "PID", "Robotique"],
  },
  {
    period: "2023 - 2024",
    title: "Projets Universitaires",
    role: "Développeur Full-Stack",
    location: "IUT Toulon",
    description: "Développement de multiples projets incluant applications mobiles, cartes électroniques Bluetooth, et robots autonomes avec asservissement PID.",
    technologies: ["React Native", "Arduino", "Bluetooth", "Python", "C++"],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <FilmStrip className="absolute top-24 left-0 right-0 opacity-10" />
        <div className="container mx-auto px-6">
          <SectionTitle
            title="À Propos"
            subtitle="Mon parcours entre cinéma et code"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedCard>
            <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-cinema-red/20 flex items-center justify-center border-4 border-primary/30">
                  <div className="text-6xl font-display font-bold text-primary">ML</div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Melvin Lacote
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Étudiant passionné en BUT GEII à Toulon, je fusionne mes deux passions : 
                    le <span className="text-cinema-red font-semibold">cinéma</span> et la 
                    <span className="text-code-green font-semibold"> programmation</span>. 
                    Mon parcours m'a permis de développer des compétences en robotique, 
                    électronique et développement d'applications, tout en gardant un œil 
                    créatif inspiré par le 7ème art.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      Toulon, France
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Film className="w-4 h-4 text-cinema-red" />
                      Passionné de cinéma
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Code className="w-4 h-4 text-code-green" />
                      Développeur créatif
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-12 flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-primary" />
            Parcours Académique
          </h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <AnimatedCard key={edu.title} index={index}>
                <div className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="flex items-center gap-2 text-sm font-mono text-primary">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-1">
                      {edu.title}
                    </h4>
                    <p className="text-primary/80 font-medium mb-3">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-12 flex items-center gap-3">
            <Briefcase className="w-7 h-7 text-cinema-red" />
            Expériences Professionnelles
          </h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <AnimatedCard key={exp.title} index={index}>
                <div className="relative pl-8 border-l-2 border-cinema-red/30 hover:border-cinema-red transition-colors">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cinema-red" />
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-cinema-red/50 transition-all hover:shadow-lg hover:shadow-cinema-red/5">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="flex items-center gap-2 text-sm font-mono text-cinema-red">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-cinema-red/80 font-medium mb-3">{exp.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cinema-red/10 text-cinema-red text-xs rounded-full font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Passions */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-12 flex items-center gap-3">
            <Heart className="w-7 h-7 text-primary" />
            Ce Qui Me Passionne
          </h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <AnimatedCard index={0}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-cinema-red/50 transition-all hover:shadow-lg group">
                <Film className="w-10 h-10 text-cinema-red mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  Le Cinéma
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Le 7ème art me fascine depuis toujours. La façon dont une histoire peut être 
                  racontée à travers les images, la lumière et le son m'inspire dans ma façon 
                  de concevoir des interfaces et des expériences utilisateur.
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard index={1}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-code-green/50 transition-all hover:shadow-lg group">
                <Code className="w-10 h-10 text-code-green mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  La Programmation
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Créer des solutions techniques qui fonctionnent et qui sont élégantes 
                  est ce qui me motive. De la robotique aux applications mobiles, chaque 
                  projet est une nouvelle opportunité d'innover.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedCard>
            <blockquote className="max-w-2xl mx-auto text-center">
              <p className="font-display text-xl md:text-2xl italic text-foreground mb-4">
                "Le cinéma, comme le code, raconte des histoires. L'un avec des images, l'autre avec des algorithmes."
              </p>
              <cite className="font-mono text-sm text-primary">— Ma philosophie</cite>
            </blockquote>
          </AnimatedCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
