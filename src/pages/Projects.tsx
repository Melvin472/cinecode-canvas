import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";
import { AnimatedCard } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === "fr" ? "Robot Autonome" : "Autonomous Robot",
      description: language === "fr"
        ? "Conception et programmation d'un robot autonome avec asservissement PID. Visualisation des déplacements en temps réel et optimisation des trajets."
        : "Design and programming of an autonomous robot with PID control. Real-time movement visualization and path optimization.",
      image: "/image/robot.png",
      tags: [language === "fr" ? "Programmation" : "Programming", "PID", language === "fr" ? "Robotique" : "Robotics", "Python"],
      githubUrl: "https://github.com/Melvin472/IUT_Lacote_Melvin",
    },
    {
      title: "Stage Prolexia - Robot Oscar",
      description: language === "fr"
        ? "Tests et validation physiques pour la gestion du robot Oscar. Optimisation de l'asservissement PID, conception de carte électronique KICAD pour géolocalisation avec RTK GNSS et intégration des capteurs."
        : "Physical testing and validation for Oscar robot management. PID control optimization, KICAD electronic board design for RTK GNSS geolocation and sensor integration.",
      image: "/image/prolexia.png",
      tags: ["Tests", language === "fr" ? "Robotique" : "Robotics", "KICAD", "RTK GNSS", language === "fr" ? "Asservissement" : "Control"],
    },
    {
      title: "Beatmoji",
      description: language === "fr"
        ? "Application mobile permettant de partager de la musique de manière quotidienne en rapport avec un emoji. Plateforme sociale musicale innovante."
        : "Mobile app for sharing music daily based on an emoji. Innovative social music platform.",
      image: "/image/Beatmoji.png",
      tags: ["React", "JavaScript", "Mobile", language === "fr" ? "Musique" : "Music"],
      githubUrl: "https://github.com/Melvin472/BeatmojiApp",
    },
    {
      title: language === "fr" ? "Carte Capteur Bluetooth" : "Bluetooth Sensor Board",
      description: language === "fr"
        ? "Projet universitaire : carte de récupération de données de température via Bluetooth avec application mobile. Transmission et visualisation des données en temps réel."
        : "University project: temperature data retrieval board via Bluetooth with mobile app. Real-time data transmission and visualization.",
      image: "/image/nrfconnect.png",
      tags: ["Bluetooth", "Arduino", "React Native", language === "fr" ? "Capteur" : "Sensor"],
      githubUrl: "https://github.com/Melvin472/nrf-ios-beacon",
    },
    {
      title: language === "fr" ? "Jeu Vidéo - Unreal Engine" : "Video Game - Unreal Engine",
      description: language === "fr"
        ? "Développement d'un jeu vidéo immersif sous Unreal Engine. Conception de gameplay, mécaniques de combat et environnement 3D détaillé."
        : "Development of an immersive video game in Unreal Engine. Gameplay design, combat mechanics and detailed 3D environment.",
      image: "/image/unreal.png",
      tags: ["Unreal Engine", "C++", "3D", "Game Design"],
      githubUrl: "https://github.com/Melvin472/projet-unreal",
    },
    {
      title: "Bee's Hive - Roguelike Gestion",
      description: language === "fr"
        ? "Jeu vidéo développé sous Godot mêlant roguelike et gestion. Incarnez une abeille gérant sa ruche, partez en expédition pour récolter des matériaux et combattez des ennemis pour assurer la survie de votre colonie."
        : "Video game developed in Godot combining roguelike and management. Play as a bee managing its hive, go on expeditions to collect materials and fight enemies to ensure your colony's survival.",
      image: "/image/beeshive.png",
      tags: ["Godot", "GDScript", "Roguelike", language === "fr" ? "Gestion" : "Management", "Game Design"],
      githubUrl: "https://github.com/Melvin472/insect-rogue",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navigation />
      <div className="pt-24">
        <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedCard key={index} index={index}>
                <ProjectCard {...project} />
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
