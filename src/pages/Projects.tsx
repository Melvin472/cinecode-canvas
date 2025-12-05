import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Robot Autonome",
    description:
      "Conception et programmation d'un robot autonome avec asservissement PID. Visualisation des déplacements en temps réel et optimisation des trajets.",
    image: "/image/robot.png",
    tags: ["Programmation", "PID", "Robotique", "Python"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Stage Prolexia - Robot Oscar",
    description:
      "Tests et validation physiques pour la gestion du robot Oscar. Optimisation de l'asservissement PID, conception de carte électronique KICAD pour géolocalisation avec RTK GNSS et intégration des capteurs.",
    image: "/image/prolexia.png",
    tags: ["Tests", "Robotique", "KICAD", "RTK GNSS", "Asservissement"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Beatmoji",
    description:
      "Application mobile permettant de partager de la musique de manière quotidienne en rapport avec un emoji. Plateforme sociale musicale innovante.",
    image: "/image/Beatmoji.png",
    tags: ["React", "JavaScript", "Mobile", "Musique"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Carte Capteur Bluetooth",
    description:
      "Projet universitaire : carte de récupération de données de température via Bluetooth avec application mobile. Transmission et visualisation des données en temps réel.",
    image: "/image/capteur.png",
    tags: ["Bluetooth", "Arduino", "React Native", "Capteur"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Jeu Vidéo - Unreal Engine",
    description:
      "Développement d'un jeu vidéo immersif sous Unreal Engine. Conception de gameplay, mécaniques de combat et environnement 3D détaillé.",
    image: "/image/unreal.png",
    tags: ["Unreal Engine", "C++", "3D", "Game Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navigation />
      <div className="pt-24">
        <SectionTitle title="Projets" />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
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