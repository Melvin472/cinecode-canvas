import { GraduationCap, Briefcase, Calendar, MapPin, Film, Code, Heart, Rocket, Target, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import FilmStrip from "@/components/FilmStrip";
import { AnimatedCard } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();

  const education = [
    {
      period: "2022 - 2025",
      title: language === "fr" 
        ? "BUT GEII (Génie Électrique et Informatique Industrielle)"
        : "BUT GEII (Electrical and Industrial IT Engineering)",
      institution: "IUT de Toulon",
      location: "Toulon, France",
      description: language === "fr"
        ? "Formation en électronique, informatique industrielle, automatisme et robotique. Spécialisation en systèmes embarqués et programmation."
        : "Training in electronics, industrial computing, automation and robotics. Specialization in embedded systems and programming.",
    },
    {
      period: "2022",
      title: language === "fr" ? "Baccalauréat STI2D" : "STI2D Baccalaureate",
      institution: "Lycée Rouvière",
      location: "Toulon, France",
      description: language === "fr"
        ? "Spécialité Sciences et Technologies de l'Industrie et du Développement Durable. Option SIN (Systèmes d'Information et Numérique)."
        : "Specialty in Industrial Sciences and Technologies and Sustainable Development. SIN option (Information and Digital Systems).",
    },
  ];

  const experience = [
    {
      period: "2024",
      title: "Stage - Prolexia",
      role: language === "fr" ? "Développeur Robotique" : "Robotics Developer",
      location: "France",
      description: language === "fr"
        ? "Tests et validation physiques pour la gestion du robot Oscar. Optimisation de l'asservissement PID, conception de carte électronique KICAD pour géolocalisation avec RTK GNSS et intégration des capteurs."
        : "Physical testing and validation for Oscar robot management. PID control optimization, KICAD electronic board design for RTK GNSS geolocation and sensor integration.",
      technologies: ["Python", "KICAD", "RTK GNSS", "PID", language === "fr" ? "Robotique" : "Robotics"],
    },
    {
      period: "2023 - 2024",
      title: language === "fr" ? "Projets Universitaires" : "University Projects",
      role: language === "fr" ? "Développeur Full-Stack" : "Full-Stack Developer",
      location: "IUT Toulon",
      description: language === "fr"
        ? "Développement de multiples projets incluant applications mobiles, cartes électroniques Bluetooth, et robots autonomes avec asservissement PID."
        : "Development of multiple projects including mobile applications, Bluetooth electronic boards, and autonomous robots with PID control.",
      technologies: ["React Native", "Arduino", "Bluetooth", "Python", "C++"],
    },
  ];

  const objectives = [
    {
      icon: Rocket,
      title: language === "fr" ? "Développeur Full-Stack" : "Full-Stack Developer",
      description: language === "fr"
        ? "Devenir un développeur polyvalent maîtrisant aussi bien le front-end que le back-end, capable de créer des applications complètes de A à Z."
        : "Become a versatile developer mastering both front-end and back-end, capable of creating complete applications from A to Z.",
      color: "primary",
    },
    {
      icon: Target,
      title: language === "fr" ? "Innovation Technologique" : "Technological Innovation",
      description: language === "fr"
        ? "Contribuer à des projets innovants qui fusionnent technologie et créativité, notamment dans les domaines de la robotique et de l'IoT."
        : "Contribute to innovative projects that merge technology and creativity, especially in robotics and IoT.",
      color: "cinema-red",
    },
    {
      icon: Sparkles,
      title: language === "fr" ? "Expériences Utilisateur Uniques" : "Unique User Experiences",
      description: language === "fr"
        ? "Créer des interfaces qui racontent des histoires, inspirées par le cinéma, offrant des expériences mémorables aux utilisateurs."
        : "Create interfaces that tell stories, inspired by cinema, offering memorable experiences to users.",
      color: "code-green",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <FilmStrip className="absolute top-24 left-0 right-0 opacity-10" />
        <div className="container mx-auto px-6">
          <SectionTitle
            title={t.about.title}
            subtitle={language === "fr" ? "Mon parcours entre cinéma et code" : "My journey between cinema and code"}
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
                    {language === "fr" ? (
                      <>
                        Étudiant passionné en BUT GEII à Toulon, je fusionne mes deux passions : 
                        le <span className="text-cinema-red font-semibold">cinéma</span> et la 
                        <span className="text-code-green font-semibold"> programmation</span>. 
                        Mon parcours m'a permis de développer des compétences en robotique, 
                        électronique et développement d'applications, tout en gardant un œil 
                        créatif inspiré par le 7ème art.
                      </>
                    ) : (
                      <>
                        Passionate student in BUT GEII in Toulon, I merge my two passions: 
                        <span className="text-cinema-red font-semibold"> cinema</span> and 
                        <span className="text-code-green font-semibold"> programming</span>. 
                        My journey has allowed me to develop skills in robotics, 
                        electronics and application development, while keeping a creative eye 
                        inspired by the 7th art.
                      </>
                    )}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      Toulon, France
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Film className="w-4 h-4 text-cinema-red" />
                      {language === "fr" ? "Passionné de cinéma" : "Cinema enthusiast"}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Code className="w-4 h-4 text-code-green" />
                      {language === "fr" ? "Développeur créatif" : "Creative developer"}
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
            {t.about.academicTitle}
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
            {t.about.professionalTitle}
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
            {language === "fr" ? "Ce Qui Me Passionne" : "What Drives Me"}
          </h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <AnimatedCard index={0}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-cinema-red/50 transition-all hover:shadow-lg group">
                <Film className="w-10 h-10 text-cinema-red mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {language === "fr" ? "Le Cinéma" : "Cinema"}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {language === "fr"
                    ? "Le 7ème art me fascine depuis toujours. La façon dont une histoire peut être racontée à travers les images, la lumière et le son m'inspire dans ma façon de concevoir des interfaces et des expériences utilisateur."
                    : "The 7th art has always fascinated me. The way a story can be told through images, light and sound inspires me in designing interfaces and user experiences."
                  }
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard index={1}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-code-green/50 transition-all hover:shadow-lg group">
                <Code className="w-10 h-10 text-code-green mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {language === "fr" ? "La Programmation" : "Programming"}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {language === "fr"
                    ? "Créer des solutions techniques qui fonctionnent et qui sont élégantes est ce qui me motive. De la robotique aux applications mobiles, chaque projet est une nouvelle opportunité d'innover."
                    : "Creating technical solutions that work and are elegant is what motivates me. From robotics to mobile apps, every project is a new opportunity to innovate."
                  }
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Objectifs Professionnels */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-12 flex items-center gap-3">
            <Rocket className="w-7 h-7 text-code-green" />
            {t.about.objectivesTitle}
          </h3>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {objectives.map((obj, index) => (
              <AnimatedCard key={obj.title} index={index}>
                <div className={`h-full bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-${obj.color}/50 transition-all hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-${obj.color}/10 to-transparent rounded-bl-full`} />
                  <obj.icon className={`w-12 h-12 text-${obj.color} mb-4 group-hover:scale-110 transition-transform relative z-10`} />
                  <h4 className="font-display text-lg font-semibold text-foreground mb-3 relative z-10">
                    {obj.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {obj.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
