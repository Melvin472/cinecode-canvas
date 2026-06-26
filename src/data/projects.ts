export interface Project {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  longDescription: {
    fr: string;
    en: string;
  };
  image: string;
  gallery?: string[];
  tags: {
    fr: string[];
    en: string[];
  };
  githubUrl?: string;
  liveUrl?: string;
  features: {
    fr: string[];
    en: string[];
  };
  year: string;
  role: {
    fr: string;
    en: string;
  };
}

export const projects: Project[] = [
  {
    slug: "robot-autonome",
    title: {
      fr: "Robot Autonome",
      en: "Autonomous Robot",
    },
    description: {
      fr: "Conception et programmation d'un robot autonome avec asservissement PID. Visualisation des déplacements en temps réel et optimisation des trajets.",
      en: "Design and programming of an autonomous robot with PID control. Real-time movement visualization and path optimization.",
    },
    longDescription: {
      fr: "Ce projet universitaire consistait à concevoir et programmer un robot autonome capable de naviguer dans un environnement contrôlé. Le robot utilise un asservissement PID (Proportionnel-Intégral-Dérivé) pour maintenir une trajectoire précise et réagir aux obstacles. Une interface de visualisation en temps réel permet de suivre les déplacements et d'analyser les performances du système d'asservissement.",
      en: "This university project involved designing and programming an autonomous robot capable of navigating a controlled environment. The robot uses PID (Proportional-Integral-Derivative) control to maintain a precise trajectory and react to obstacles. A real-time visualization interface allows tracking movements and analyzing the control system's performance.",
    },
    image: "/image/robot.png",
    tags: {
      fr: ["Programmation", "PID", "Robotique", "Python"],
      en: ["Programming", "PID", "Robotics", "Python"],
    },
    githubUrl: "https://github.com/Melvin472/IUT_Lacote_Melvin",
    features: {
      fr: [
        "Asservissement PID pour le contrôle de trajectoire",
        "Visualisation en temps réel des déplacements",
        "Optimisation des trajets",
        "Détection et évitement d'obstacles",
        "Interface de monitoring",
      ],
      en: [
        "PID control for trajectory management",
        "Real-time movement visualization",
        "Path optimization",
        "Obstacle detection and avoidance",
        "Monitoring interface",
      ],
    },
    year: "2023",
    role: {
      fr: "Développeur & Concepteur",
      en: "Developer & Designer",
    },
  },
  {
    slug: "interface-films-monnaieservices",
    title: {
      fr: "Stage - Interface de Gestion de Films",
      en: "Internship - Movie Management Interface",
    },
    description: {
      fr: "Développement Front-End d'une Single Page Application (SPA) pour la gestion d'une base de données de films (stage chez Monnaie Services).",
      en: "Front-End development of a Single Page Application (SPA) for movie database management (internship at Monnaie Services).",
    },
    longDescription: {
      fr: "Ce premier projet réalisé lors de mon stage chez Monnaie Services consistait à concevoir de A à Z le Front-End d'une application métier destinée aux distributeurs de films. J'ai développé une Single Page Application robuste gérant d'importants volumes de données via des appels API REST asynchrones. L'interface intègre un système ingénieux de brouillon local (mise à jour différentielle) limitant la charge serveur, ainsi que des modules interactifs pour le téléversement d'affiches.",
      en: "This first project completed during my internship at Monnaie Services involved designing from scratch the Front-End of a business application for film distributors. I developed a robust Single Page Application handling massive amounts of data via asynchronous REST API calls. The interface integrates an ingenious local draft system (differential update) limiting server load, as well as interactive modules for poster uploads.",
    },
    image: "/image/monnaie-services-1.png",
    tags: {
      fr: ["JavaScript", "jQuery", "API REST", "Front-End", "UI/UX"],
      en: ["JavaScript", "jQuery", "REST API", "Front-End", "UI/UX"],
    },
    features: {
      fr: [
        "Architecture Single Page Application (SPA)",
        "Requêtes asynchrones et communication API REST",
        "Système de sauvegarde partielle (brouillon local)",
        "Manipulation avancée du DOM avec jQuery",
        "Gestion asynchrone des médias (FileReader)",
      ],
      en: [
        "Single Page Application (SPA) architecture",
        "Asynchronous requests and REST API communication",
        "Partial save system (local draft)",
        "Advanced DOM manipulation with jQuery",
        "Asynchronous media handling (FileReader)",
      ],
    },
    year: "2026",
    role: {
      fr: "Développeur Web Front-End",
      en: "Front-End Web Developer",
    },
  },
  {
    slug: "imscine-modules-clients",
    title: {
      fr: "Stage - Modules Clients imsCiné",
      en: "Internship - imsCiné Client Modules",
    },
    description: {
      fr: "Développement des interfaces pour le logiciel de caisse imsCiné. Adaptation stricte aux écrans tactiles industriels et traitement de données massives.",
      en: "Interface development for the imsCiné POS software. Strict adaptation to industrial touch screens and massive data processing.",
    },
    longDescription: {
      fr: "Dans le cadre de ma deuxième mission chez Monnaie Services, j'ai été intégré au développement du cœur du logiciel de caisse imsCiné. J'ai conçu et intégré les modules Contacts, Offres, CSE, Utilisateurs et Groupes. Le principal défi a été d'adapter des interfaces complexes aux écrans tactiles industriels limités à une résolution de 1024x768. J'ai utilisé Tabulator pour la gestion des tableaux de données, implémenté des validations préventives côté client pour prévenir les erreurs de saisie, et optimisé le chargement des ressources (Promise.all).",
      en: "As part of my second mission at Monnaie Services, I was integrated into the development of the core imsCiné POS software. I designed and integrated the Contacts, Offers, CSE, Users, and Groups modules. The main challenge was adapting complex interfaces to industrial touch screens limited to a 1024x768 resolution. I used Tabulator for data table management, implemented preventive client-side validations to prevent input errors, and optimized resource loading (Promise.all).",
    },
    image: "/image/imscine.png",
    tags: {
      fr: ["JavaScript", "Responsive", "Tabulator", "CSS", "Performances"],
      en: ["JavaScript", "Responsive", "Tabulator", "CSS", "Performance"],
    },
    features: {
      fr: [
        "Design adaptatif pour écrans tactiles (1024x768)",
        "Tableaux de données interactifs (Tabulator)",
        "Validation algorithmique préventive côté client",
        "Chargement asynchrone parallélisé (Promise.all)",
        "Édition en temps réel des données (Inline Editing)",
      ],
      en: [
        "Responsive design for 1024x768 touch screens",
        "Interactive data tables (Tabulator)",
        "Preventive client-side algorithmic validation",
        "Parallelized asynchronous loading (Promise.all)",
        "Real-time data editing (Inline Editing)",
      ],
    },
    year: "2026",
    role: {
      fr: "Développeur Web Front-End",
      en: "Front-End Web Developer",
    },
  },
  {
    slug: "prolexia-oscar",
    title: {
      fr: "Stage Prolexia - Robot Oscar",
      en: "Prolexia Internship - Oscar Robot",
    },
    description: {
      fr: "Tests et validation physiques pour la gestion du robot Oscar. Optimisation de l'asservissement PID, conception de carte électronique KICAD pour géolocalisation avec RTK GNSS et intégration des capteurs.",
      en: "Physical testing and validation for Oscar robot management. PID control optimization, KICAD electronic board design for RTK GNSS geolocation and sensor integration.",
    },
    longDescription: {
      fr: "Durant mon stage chez Prolexia, j'ai travaillé sur le robot Oscar, un robot agricole autonome. Mes missions incluaient les tests physiques de validation, l'optimisation du système d'asservissement PID, ainsi que la conception d'une carte électronique sous KICAD intégrant un système de géolocalisation RTK GNSS pour une précision centimétrique. J'ai également participé à l'intégration de divers capteurs pour améliorer les capacités du robot.",
      en: "During my internship at Prolexia, I worked on the Oscar robot, an autonomous agricultural robot. My tasks included physical validation testing, PID control system optimization, and designing an electronic board in KICAD integrating an RTK GNSS geolocation system for centimeter-level precision. I also contributed to integrating various sensors to enhance the robot's capabilities.",
    },
    image: "/image/prolexia.png",
    tags: {
      fr: ["Tests", "Robotique", "KICAD", "RTK GNSS", "Asservissement"],
      en: ["Tests", "Robotics", "KICAD", "RTK GNSS", "Control"],
    },
    features: {
      fr: [
        "Tests et validation physiques",
        "Optimisation de l'asservissement PID",
        "Conception de carte électronique KICAD",
        "Intégration RTK GNSS haute précision",
        "Intégration de capteurs multiples",
      ],
      en: [
        "Physical testing and validation",
        "PID control optimization",
        "KICAD electronic board design",
        "High-precision RTK GNSS integration",
        "Multiple sensor integration",
      ],
    },
    year: "2025",
    role: {
      fr: "Stagiaire Ingénieur",
      en: "Engineering Intern",
    },
  },
  {
    slug: "beatmoji",
    title: {
      fr: "Beatmoji",
      en: "Beatmoji",
    },
    description: {
      fr: "Application mobile permettant de partager de la musique de manière quotidienne en rapport avec un emoji. Plateforme sociale musicale innovante.",
      en: "Mobile app for sharing music daily based on an emoji. Innovative social music platform.",
    },
    longDescription: {
      fr: "Beatmoji est une application mobile sociale innovante qui permet aux utilisateurs de partager leur musique quotidienne en l'associant à un emoji représentant leur humeur ou le thème de la chanson. L'application crée une communauté autour de la découverte musicale et des émotions partagées. Les utilisateurs peuvent suivre leurs amis, découvrir de nouveaux artistes et créer des playlists collaboratives basées sur les emojis.",
      en: "Beatmoji is an innovative social mobile app that allows users to share their daily music by associating it with an emoji representing their mood or the song's theme. The app creates a community around music discovery and shared emotions. Users can follow friends, discover new artists, and create collaborative playlists based on emojis.",
    },
    image: "/image/Beatmoji.png",
    tags: {
      fr: ["React", "JavaScript", "Mobile", "Musique"],
      en: ["React", "JavaScript", "Mobile", "Music"],
    },
    githubUrl: "https://github.com/Melvin472/BeatmojiApp",
    features: {
      fr: [
        "Partage quotidien de musique avec emoji",
        "Système de suivi d'amis",
        "Découverte musicale personnalisée",
        "Playlists collaboratives",
        "Intégration avec services de streaming",
      ],
      en: [
        "Daily music sharing with emoji",
        "Friend following system",
        "Personalized music discovery",
        "Collaborative playlists",
        "Streaming service integration",
      ],
    },
    year: "2025",
    role: {
      fr: "Développeur Full-Stack",
      en: "Full-Stack Developer",
    },
  },
  {
    slug: "carte-capteur-bluetooth",
    title: {
      fr: "Carte Capteur Bluetooth",
      en: "Bluetooth Sensor Board",
    },
    description: {
      fr: "Projet universitaire : carte de récupération de données de température via Bluetooth avec application mobile. Transmission et visualisation des données en temps réel.",
      en: "University project: temperature data retrieval board via Bluetooth with mobile app. Real-time data transmission and visualization.",
    },
    longDescription: {
      fr: "Ce projet universitaire consistait à développer une solution IoT complète pour la surveillance de température. J'ai conçu une carte électronique intégrant un capteur de température et un module Bluetooth Low Energy (BLE). Une application mobile React Native a été développée pour recevoir et visualiser les données en temps réel. Le système permet une surveillance continue avec historique des mesures et alertes personnalisables.",
      en: "This university project involved developing a complete IoT solution for temperature monitoring. I designed an electronic board integrating a temperature sensor and a Bluetooth Low Energy (BLE) module. A React Native mobile app was developed to receive and visualize data in real-time. The system allows continuous monitoring with measurement history and customizable alerts.",
    },
    image: "/image/nrfconnect.png",
    tags: {
      fr: ["Bluetooth", "Arduino", "React Native", "Capteur"],
      en: ["Bluetooth", "Arduino", "React Native", "Sensor"],
    },
    githubUrl: "https://github.com/Melvin472/nrf-ios-beacon",
    features: {
      fr: [
        "Transmission BLE basse consommation",
        "Application mobile React Native",
        "Visualisation en temps réel",
        "Historique des mesures",
        "Alertes personnalisables",
      ],
      en: [
        "Low-power BLE transmission",
        "React Native mobile app",
        "Real-time visualization",
        "Measurement history",
        "Customizable alerts",
      ],
    },
    year: "2025-2026",
    role: {
      fr: "Développeur IoT & Mobile",
      en: "IoT & Mobile Developer",
    },
  },
  {
    slug: "godot-game-jam",
    title: {
      fr: "Very Serious Game Jam - Godot",
      en: "Very Serious Game Jam - Godot",
    },
    description: {
      fr: "Jeu développé en solo en 1 semaine pour la Very Serious Game Jam de Juniperdev. Programmation, Game Design et composition musicale.",
      en: "Game developed solo in 1 week for Juniperdev's Very Serious Game Jam. Programming, Game Design, and music composition.",
    },
    longDescription: {
      fr: "Dans le cadre de la Very Serious Game Jam organisée par Juniperdev, j'ai eu une semaine pour concevoir et développer un jeu vidéo de A à Z. Étant seul sur ce projet, j'ai pu toucher à tous les aspects de la création : du développement sous Godot Engine (GDScript) à la conception du Game Design, en passant par la composition de la bande-son originale. Une excellente expérience pour tester ma capacité à prototyper rapidement sous pression.",
      en: "As part of the Very Serious Game Jam organized by Juniperdev, I had one week to design and develop a video game from scratch. Being solo on this project, I handled all aspects of creation: from development in Godot Engine (GDScript) to Game Design, and even composing the original soundtrack. A great experience to test my ability to prototype quickly under pressure.",
    },
    image: "/image/godot-jam.png",
    tags: {
      fr: ["Godot", "GDScript", "Game Jam", "Solo", "Musique"],
      en: ["Godot", "GDScript", "Game Jam", "Solo", "Music"],
    },
    features: {
      fr: [
        "Développement complet en solo en 1 semaine",
        "Prototypage rapide de mécaniques de jeu",
        "Composition de la musique originale",
        "Gestion complète du projet sous contrainte de temps",
      ],
      en: [
        "Full solo development in 1 week",
        "Rapid game mechanics prototyping",
        "Original music composition",
        "Complete time-constrained project management",
      ],
    },
    year: "2026",
    role: {
      fr: "Développeur, Game Designer & Compositeur",
      en: "Developer, Game Designer & Composer",
    },
  },
  {
    slug: "projet-perso-godot",
    title: {
      fr: "Projet Perso (En cours) - Godot",
      en: "Personal Project (WIP) - Godot",
    },
    description: {
      fr: "Jeu indépendant en cours de développement (Solo). Un hybride entre Stardew Valley et Dave the Diver mêlant gestion, agriculture et exploration.",
      en: "Indie game currently in development (Solo). A hybrid between Stardew Valley and Dave the Diver mixing management, farming, and exploration.",
    },
    longDescription: {
      fr: "Animé par mon envie d'apprendre continuellement et d'expérimenter de nouvelles choses, je développe actuellement ce projet personnel en solo sur mon temps libre. C'est un jeu ambitieux sous Godot Engine qui vise à fusionner les mécaniques réconfortantes d'agriculture et de gestion relationnelle de Stardew Valley avec l'exploration et la gestion de ressources dynamiques de Dave the Diver. Ce projet me permet d'explorer des architectures de code plus complexes et de nouvelles fonctionnalités de Godot.",
      en: "Driven by my desire to continuously learn and experiment with new things, I am currently developing this personal solo project in my free time. It's an ambitious game in Godot Engine that aims to merge the cozy farming and relationship mechanics of Stardew Valley with the exploration and dynamic resource management of Dave the Diver. This project allows me to explore more complex code architectures and new Godot features.",
    },
    image: "/image/projet-perso-godot.png", // Pense à ajouter une image avec ce nom
    tags: {
      fr: ["Godot", "En cours", "Simulation", "Aventure", "Solo"],
      en: ["Godot", "WIP", "Simulation", "Adventure", "Solo"],
    },
    features: {
      fr: [
        "Mécaniques d'agriculture et de gestion (Stardew-like)",
        "Système d'exploration et de récolte (Dave the Diver-like)",
        "Apprentissage continu de nouvelles architectures de code",
        "Développement intégral en solo (Game Design, Code, Assets)",
      ],
      en: [
        "Farming and management mechanics (Stardew-like)",
        "Exploration and gathering system (Dave the Diver-like)",
        "Continuous learning of new code architectures",
        "Full solo development (Game Design, Code, Assets)",
      ],
    },
    year: "2026",
    role: {
      fr: "Développeur Solo & Créateur",
      en: "Solo Developer & Creator",
    },
  },
  {
    slug: "theatre-comedien",
    title: {
      fr: "Représentation Théâtrale",
      en: "Theater Performance",
    },
    description: {
      fr: "Participation à une pièce de théâtre en tant que comédien. Développement des compétences oratoires, gestion du stress et travail d'équipe sur scène.",
      en: "Participation in a play as an actor. Development of public speaking skills, stress management, and teamwork on stage.",
    },
    longDescription: {
      fr: "Au-delà de la performance artistique, ce projet m'a permis de développer des 'soft skills' essentielles. L'interprétation d'un rôle demande une grande capacité d'adaptation, une mémorisation rigoureuse et une écoute active des partenaires de jeu. La gestion du trac et la prise de parole en public sont des compétences transversales que j'ai pu affiner lors des représentations devant un public réel.",
      en: "Beyond the artistic performance, this project allowed me to develop essential soft skills. Interpreting a role requires great adaptability, rigorous memorization, and active listening to partners. Managing stage fright and public speaking are transversal skills that I refined during performances in front of a live audience.",
    },
    image: "/image/spectacle.png", 
    tags: {
      fr: ["Soft Skills", "Prise de parole", "Art", "Travail d'équipe"],
      en: ["Soft Skills", "Public Speaking", "Art", "Teamwork"],
    },
    features: {
      fr: [
        "Interprétation et jeu d'acteur",
        "Gestion du stress et aisance scénique",
        "Mémorisation et rigueur",
        "Travail de la voix et de la posture",
        "Collaboration artistique",
      ],
      en: [
        "Acting and interpretation",
        "Stress management and stage presence",
        "Memorization and rigor",
        "Voice and posture training",
        "Artistic collaboration",
      ],
    },
    year: "2024",
    role: {
      fr: "Comédien",
      en: "Actor",
    },
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};