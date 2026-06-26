import { LucideIcon, Lightbulb, Search, Settings, Puzzle, Palette } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
}

export interface ProjectWithSkills {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  image: string;
  skills: Skill[];
  level: number; // 1, 2, or 3 for hierarchy
  justification: {
    fr: string;
    en: string;
  };
}

export interface CompetencyGroup {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  icon: LucideIcon;
  color: string;
  maxLevels: number; // 2 or 3
  levelLabels: {
    fr: string[];
    en: string[];
  };
  projects: ProjectWithSkills[];
}

export const competencyGroups: CompetencyGroup[] = [
  {
    id: "concevoir",
    title: {
      fr: "Concevoir",
      en: "Design",
    },
    description: {
      fr: "Conception et création de solutions innovantes",
      en: "Design and creation of innovative solutions",
    },
    icon: Lightbulb,
    color: "text-yellow-500",
    maxLevels: 3,
    levelLabels: {
      fr: [
        "Niveau 1 : Mener une conception partielle intégrant une démarche projet",
        "Niveau 2 : Concevoir un système en fiabilisant les solutions proposées",
        "Niveau 3 : Concevoir un système en adoptant une approche sélective dans ses choix technologiques"
      ],
      en: [
        "Level 1: Lead a partial design integrating a project approach",
        "Level 2: Design a system by making proposed solutions more reliable",
        "Level 3: Design a system by adopting a selective approach in technology choices"
      ],
    },
    projects: [
{
        slug: "godot-game-jam",
        title: {
          fr: "Very Serious Game Jam",
          en: "Very Serious Game Jam",
        },
        image: "/image/godot-jam.png",
        level: 1,
        skills: [
          { name: "Game Design", level: 85 },
          { name: "Godot Engine", level: 85 },
          { name: "Gestion du temps", level: 90 },
          { name: "Composition musicale", level: 75 },
        ],
        justification: {
          fr: "Création d'un jeu de A à Z, seul en 1 semaine pour la Very Serious Game Jam de Juniperdev. Une conception express (Game Design, Code, Musique) exigeant une forte capacité d'adaptation et d'efficacité.",
          en: "Creation of a game from scratch, alone in 1 week for Juniperdev's Very Serious Game Jam. An express design (Game Design, Code, Music) requiring high adaptability and efficiency.",
        },
      },
      {
        slug: "interface-films-monnaieservices",
        title: {
          fr: "Stage - Interface de Films",
          en: "Internship - Movie Interface",
        },
        image: "/image/monnaie-services-1.png",
        level: 2,
        skills: [
          { name: "JavaScript", level: 90 },
          { name: "API REST", level: 85 },
          { name: "jQuery", level: 80 },
          { name: "UI/UX", level: 85 },
        ],
        justification: {
          fr: "Ce projet m'a permis de fiabiliser mes solutions Front-End en concevant une architecture Single Page Application robuste, gérant un système de brouillon local pour optimiser les requêtes réseau (85%).",
          en: "This project allowed me to make my Front-End solutions more reliable by designing a robust Single Page Application architecture, managing a local draft system to optimize network requests (85%).",
        },
      },
      {
        slug: "robot-autonome",
        title: {
          fr: "Robot Autonome",
          en: "Autonomous Robot",
        },
        image: "/image/robot.png",
        level: 2,
        skills: [
          { name: "Architecture système", level: 85 },
          { name: "Conception mécanique", level: 75 },
          { name: "Algorithmes PID", level: 90 },
          { name: "Python", level: 88 },
        ],
        justification: {
          fr: "Ce projet m'a permis de fiabiliser mes solutions avec des algorithmes PID performants (90%). L'architecture système à 85% montre ma maîtrise de la conception globale, et Python à 88% reflète mon aisance en programmation embarquée.",
          en: "This project allowed me to make my solutions more reliable with efficient PID algorithms (90%). The 85% system architecture shows my mastery of overall design, and 88% Python reflects my comfort in embedded programming.",
        },
      },
      {
        slug: "prolexia-oscar",
        title: {
          fr: "Stage Prolexia - Robot Oscar",
          en: "Prolexia Internship - Oscar Robot",
        },
        image: "/image/prolexia.png",
        level: 3,
        skills: [
          { name: "KICAD", level: 85 },
          { name: "RTK GNSS", level: 80 },
          { name: "Conception PCB", level: 82 },
          { name: "Électronique embarquée", level: 78 },
        ],
        justification: {
          fr: "En stage professionnel, j'ai adopté une approche sélective dans mes choix technologiques. KICAD à 85% et PCB à 82% témoignent de ma capacité à concevoir des solutions électroniques adaptées. Le RTK GNSS à 80% montre ma maîtrise de technologies de pointe.",
          en: "During my professional internship, I adopted a selective approach in my technology choices. KICAD at 85% and PCB at 82% demonstrate my ability to design suitable electronic solutions. RTK GNSS at 80% shows my mastery of cutting-edge technologies.",
        },
      },
    ],
  },
  {
    id: "verifier",
    title: {
      fr: "Vérifier",
      en: "Verify",
    },
    description: {
      fr: "Tests et validation des systèmes",
      en: "Testing and system validation",
    },
    icon: Search,
    color: "text-blue-500",
    maxLevels: 3,
    levelLabels: {
      fr: [
        "Niveau 1 : Effectuer les tests et mesures nécessaires à une vérification d'un système",
        "Niveau 2 : Mettre en place un protocole de tests pour valider le fonctionnement d'un système",
        "Niveau 3 : Élaborer une procédure intégrant une démarche qualité pour valider le fonctionnement d'un système"
      ],
      en: [
        "Level 1: Perform the tests and measurements necessary to verify a system",
        "Level 2: Set up a test protocol to validate the operation of a system",
        "Level 3: Develop a procedure integrating a quality approach to validate the operation of a system"
      ],
    },
    projects: [
      {
        slug: "carte-capteur-bluetooth",
        title: {
          fr: "Carte Capteur Bluetooth",
          en: "Bluetooth Sensor Board",
        },
        image: "/image/nrfconnect.png",
        level: 1,
        skills: [
          { name: "Tests BLE", level: 82 },
          { name: "Validation données", level: 85 },
          { name: "Debugging wireless", level: 78 },
        ],
        justification: {
          fr: "J'ai effectué les tests et mesures nécessaires sur la communication Bluetooth. Les tests BLE à 82% et la validation des données à 85% montrent ma capacité à vérifier le bon fonctionnement des transmissions sans fil.",
          en: "I performed the necessary tests and measurements on Bluetooth communication. BLE tests at 82% and data validation at 85% show my ability to verify proper wireless transmission operation.",
        },
      },
      {
        slug: "robot-autonome",
        title: {
          fr: "Robot Autonome",
          en: "Autonomous Robot",
        },
        image: "/image/robot.png",
        level: 2,
        skills: [
          { name: "Tests unitaires", level: 80 },
          { name: "Analyse de performance", level: 78 },
          { name: "Calibration capteurs", level: 85 },
        ],
        justification: {
          fr: "J'ai mis en place un protocole de tests complet pour valider le robot. La calibration capteurs à 85% et les tests unitaires à 80% démontrent ma méthodologie structurée de validation.",
          en: "I set up a complete test protocol to validate the robot. Sensor calibration at 85% and unit tests at 80% demonstrate my structured validation methodology.",
        },
      },
      {
        slug: "prolexia-oscar",
        title: {
          fr: "Stage Prolexia - Robot Oscar",
          en: "Prolexia Internship - Oscar Robot",
        },
        image: "/image/prolexia.png",
        level: 3,
        skills: [
          { name: "Tests physiques", level: 88 },
          { name: "Validation système", level: 85 },
          { name: "Debugging", level: 82 },
          { name: "Optimisation PID", level: 90 },
        ],
        justification: {
          fr: "En contexte professionnel, j'ai élaboré des procédures de test intégrant une démarche qualité. L'optimisation PID à 90% et les tests physiques à 88% reflètent ma rigueur dans la validation système complète.",
          en: "In a professional context, I developed test procedures integrating a quality approach. PID optimization at 90% and physical tests at 88% reflect my rigor in complete system validation.",
        },
      },
    ],
  },
  {
    id: "maintenir",
    title: {
      fr: "Maintenir",
      en: "Maintain",
    },
    description: {
      fr: "Maintenance et évolution des systèmes",
      en: "System maintenance and evolution",
    },
    icon: Settings,
    color: "text-green-500",
    maxLevels: 2,
    levelLabels: {
      fr: [
        "Niveau 1 : Intervenir sur un système pour effectuer une opération de maintenance",
        "Niveau 2 : Mettre en place une stratégie de maintenance pour garantir un fonctionnement optimal"
      ],
      en: [
        "Level 1: Intervene on a system to perform a maintenance operation",
        "Level 2: Implement a maintenance strategy to ensure optimal operation"
      ],
    },
    projects: [
{
        slug: "projet-perso-godot",
        title: {
          fr: "Projet Perso (En cours) - Sim/Aventure",
          en: "Personal Project (WIP) - Sim/Adventure",
        },
        image: "/image/projet-perso-godot.png",
        level: 1,
        skills: [
          { name: "Godot Engine", level: 85 },
          { name: "Architecture logicielle", level: 80 },
          { name: "Apprentissage continu", level: 95 },
          { name: "Game Design", level: 80 },
        ],
        justification: {
          fr: "Sur ce projet solo mixant les mécaniques de Stardew Valley et Dave the Diver, je maintiens et fais évoluer une architecture de code complexe sur le long terme. C'est mon laboratoire personnel pour apprendre et tester de nouvelles choses.",
          en: "On this solo project mixing Stardew Valley and Dave the Diver mechanics, I maintain and evolve a complex code architecture over the long term. It's my personal laboratory to learn and test new things.",
        },
      },
      {
        slug: "beatmoji",
        title: {
          fr: "Beatmoji",
          en: "Beatmoji",
        },
        image: "/image/Beatmoji.png",
        level: 2,
        skills: [
          { name: "React", level: 85 },
          { name: "Gestion état", level: 80 },
          { name: "API integration", level: 82 },
          { name: "Code refactoring", level: 78 },
        ],
        justification: {
          fr: "J'ai mis en place une stratégie de maintenance avec du refactoring régulier (78%) et une gestion d'état optimisée (80%). React à 85% et l'intégration API à 82% garantissent un fonctionnement optimal de l'application.",
          en: "I implemented a maintenance strategy with regular refactoring (78%) and optimized state management (80%). React at 85% and API integration at 82% ensure optimal application operation.",
        },
      },
    ],
  },
  {
    id: "implanter",
    title: {
      fr: "Implanter",
      en: "Implement",
    },
    description: {
      fr: "Implantation de systèmes et composants",
      en: "System and component implementation",
    },
    icon: Puzzle,
    color: "text-purple-500",
    maxLevels: 2,
    levelLabels: {
      fr: [
        "Niveau 1 : Réaliser un système en mettant en place une démarche qualité en conformité avec le dossier de fabrication",
        "Niveau 2 : Interagir avec les différents acteurs, depuis l'élaboration du protocole jusqu'à l'installation dans une visée de démarche qualité"
      ],
      en: [
        "Level 1: Build a system by implementing a quality approach in compliance with the manufacturing file",
        "Level 2: Interact with different stakeholders, from protocol development to installation with a quality approach"
      ],
    },
    projects: [
      {
        slug: "carte-capteur-bluetooth",
        title: {
          fr: "Carte Capteur Bluetooth",
          en: "Bluetooth Sensor Board",
        },
        image: "/image/nrfconnect.png",
        level: 1,
        skills: [
          { name: "Bluetooth BLE", level: 85 },
          { name: "React Native", level: 80 },
          { name: "Arduino", level: 82 },
          { name: "IoT protocols", level: 78 },
        ],
        justification: {
          fr: "J'ai réalisé ce système en suivant une démarche qualité rigoureuse. Bluetooth BLE à 85% et Arduino à 82% montrent ma maîtrise de l'implantation matérielle, tandis que React Native à 80% témoigne de l'interface utilisateur conforme aux spécifications.",
          en: "I built this system following a rigorous quality approach. Bluetooth BLE at 85% and Arduino at 82% show my mastery of hardware implementation, while React Native at 80% demonstrates a user interface compliant with specifications.",
        },
      },
      {
        slug: "imscine-modules-clients",
        title: {
          fr: "Stage - Modules imsCiné",
          en: "Internship - imsCiné Modules",
        },
        image: "/image/imscine.png",
        level: 2,
        skills: [
          { name: "JavaScript", level: 90 },
          { name: "Responsive Design", level: 85 },
          { name: "Tabulator", level: 80 },
          { name: "Performances", level: 88 },
        ],
        justification: {
          fr: "En stage, j'ai interagi avec des contraintes matérielles strictes pour implanter des interfaces sur écrans tactiles industriels (1024x768). L'optimisation des performances (88%) et le Responsive Design (85%) ont été cruciaux.",
          en: "During my internship, I interacted with strict hardware constraints to implement interfaces on industrial touch screens (1024x768). Performance optimization (88%) and Responsive Design (85%) were crucial.",
        },
      },
      {
        slug: "prolexia-oscar",
        title: {
          fr: "Stage Prolexia - Robot Oscar",
          en: "Prolexia Internship - Oscar Robot",
        },
        image: "/image/prolexia.png",
        level: 2,
        skills: [
          { name: "Intégration capteurs", level: 88 },
          { name: "RTK GNSS", level: 82 },
          { name: "Communication série", level: 80 },
          { name: "Firmware", level: 75 },
        ],
        justification: {
          fr: "En stage, j'ai interagi avec différents acteurs (tuteur, équipe technique) pour implanter le système. L'intégration capteurs à 88% et RTK GNSS à 82% reflètent ma capacité à collaborer efficacement dans une démarche qualité complète.",
          en: "During my internship, I interacted with different stakeholders (tutor, technical team) to implement the system. Sensor integration at 88% and RTK GNSS at 82% reflect my ability to collaborate effectively in a complete quality approach.",
        },
      },
    ],
  },
  {
    id: "palettes-creatives",
    title: {
      fr: "Palettes créatives",
      en: "Creative Palettes",
    },
    description: {
      fr: "Expression technique, humaine et artistique",
      en: "Technical, human, and artistic expression",
    },
    icon: Palette, 
    color: "text-red-500", 
    maxLevels: 2,
    levelLabels: {
      fr: [
        "Niveau 1 : Maîtrise des outils techniques et compétences transversales",
        "Niveau 2 : Expression artistique et réalisation audiovisuelle"
      ],
      en: [
        "Level 1: Mastery of technical tools and transversal skills",
        "Level 2: Artistic expression and audiovisual realization"
      ],
    },
    projects: [
      {
        slug: "competences-globales",
        title: {
          fr: "Tech & Soft Skills",
          en: "Tech & Soft Skills",
        },
        image: "/image/skills-mix.png", 
        level: 1,
        skills: [
          { name: "C++ / Python", level: 90 },
          { name: "React / Web", level: 85 },
          { name: "Travail d'équipe", level: 100 },
          { name: "Créativité", level: 95 },
          { name: "Adaptabilité", level: 90 },
        ],
        justification: {
          fr: "Synthèse de mes compétences techniques transverses utilisées sur l'ensemble de mes projets, alliées à mes qualités humaines (Soft Skills) essentielles pour la gestion de projet et l'innovation.",
          en: "Synthesis of my transverse technical skills used across all projects, combined with my human qualities (Soft Skills) essential for project management and innovation.",
        },
      },
      {
        slug: "cinema-audiovisuel",
        title: {
          fr: "Réalisation & Cinéma",
          en: "Filmmaking & Cinema",
        },
        image: "/image/cinema-cover.png", 
        level: 2,
        skills: [
          { name: "Gestion de l'éclairage", level: 85 },
          { name: "Cadrage", level: 90 },
          { name: "Écriture", level: 80 },
          { name: "Comédie", level: 75 },
          { name: "Direction photo", level: 82 },
        ],
        justification: {
          fr: "Portfolio dédié à ma passion pour l'image. Ce projet regroupe mes travaux sur la gestion de la lumière, la composition de plans et la post-production. (Cliquez pour voir la galerie photo)",
          en: "Portfolio dedicated to my passion for visuals. This project gathers my work on light management, shot composition, and post-production. (Click to view photo gallery)",
        },
      },
    ],
  },
];