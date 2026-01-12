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
    slug: "jeu-unreal-engine",
    title: {
      fr: "Jeu Vidéo - Unreal Engine",
      en: "Video Game - Unreal Engine",
    },
    description: {
      fr: "Développement d'un jeu vidéo immersif sous Unreal Engine. Conception de gameplay, mécaniques de combat et environnement 3D détaillé.",
      en: "Development of an immersive video game in Unreal Engine. Gameplay design, combat mechanics and detailed 3D environment.",
    },
    longDescription: {
      fr: "Ce projet personnel de développement de jeu vidéo sous Unreal Engine m'a permis d'explorer la création de gameplay immersif et de mécaniques de combat fluides. J'ai travaillé sur la conception d'environnements 3D détaillés, l'implémentation de systèmes d'animation complexes, et le développement de l'intelligence artificielle des ennemis. Le jeu utilise les blueprints et le C++ pour une flexibilité maximale.",
      en: "This personal video game development project in Unreal Engine allowed me to explore creating immersive gameplay and fluid combat mechanics. I worked on designing detailed 3D environments, implementing complex animation systems, and developing enemy AI. The game uses blueprints and C++ for maximum flexibility.",
    },
    image: "/image/unreal.png",
    tags: {
      fr: ["Unreal Engine", "C++", "3D", "Game Design"],
      en: ["Unreal Engine", "C++", "3D", "Game Design"],
    },
    githubUrl: "https://github.com/Melvin472/projet-unreal",
    features: {
      fr: [
        "Mécaniques de combat avancées",
        "Environnements 3D immersifs",
        "Intelligence artificielle des ennemis",
        "Système d'animation complexe",
        "Blueprints et C++",
      ],
      en: [
        "Advanced combat mechanics",
        "Immersive 3D environments",
        "Enemy AI",
        "Complex animation system",
        "Blueprints and C++",
      ],
    },
    year: "2024",
    role: {
      fr: "Game Designer & Développeur",
      en: "Game Designer & Developer",
    },
  },
  {
    slug: "bees-hive",
    title: {
      fr: "Bee's Hive - Roguelike Gestion",
      en: "Bee's Hive - Roguelike Management",
    },
    description: {
      fr: "Jeu vidéo développé sous Godot mêlant roguelike et gestion. Incarnez une abeille gérant sa ruche, partez en expédition pour récolter des matériaux et combattez des ennemis pour assurer la survie de votre colonie.",
      en: "Video game developed in Godot combining roguelike and management. Play as a bee managing its hive, go on expeditions to collect materials and fight enemies to ensure your colony's survival.",
    },
    longDescription: {
      fr: "Bee's Hive est un jeu vidéo innovant développé sous Godot qui combine les mécaniques du roguelike avec des éléments de gestion. Le joueur incarne une abeille héroïque chargée de faire prospérer sa ruche. Entre les expéditions périlleuses pour récolter des ressources et les combats contre des insectes envahisseurs, il faut également gérer la ruche, construire de nouvelles cellules et assurer la survie de la colonie.",
      en: "Bee's Hive is an innovative video game developed in Godot that combines roguelike mechanics with management elements. The player embodies a heroic bee tasked with making their hive prosper. Between perilous expeditions to collect resources and battles against invading insects, players must also manage the hive, build new cells, and ensure the colony's survival.",
    },
    image: "/image/beeshive.png",
    tags: {
      fr: ["Godot", "GDScript", "Roguelike", "Gestion", "Game Design"],
      en: ["Godot", "GDScript", "Roguelike", "Management", "Game Design"],
    },
    githubUrl: "https://github.com/Melvin472/insect-rogue",
    features: {
      fr: [
        "Mécaniques roguelike procédurales",
        "Système de gestion de ruche",
        "Combat tactique en temps réel",
        "Collecte et crafting de ressources",
        "Pixel art stylisé",
      ],
      en: [
        "Procedural roguelike mechanics",
        "Hive management system",
        "Real-time tactical combat",
        "Resource collection and crafting",
        "Stylized pixel art",
      ],
    },
    year: "2025",
    role: {
      fr: "Game Designer & Développeur",
      en: "Game Designer & Developer",
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
    // Pas de lien GitHub pour du théâtre, c'est logique
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
  },
  {
    slug: "portfolio-photographie",
    title: {
      fr: "Portfolio Photographie",
      en: "Photography Portfolio",
    },
    description: {
      fr: "Projet artistique explorant la composition, la gestion de la lumière et la retouche photo. Mise en valeur de sujets variés à travers un objectif technique et créatif.",
      en: "Artistic project exploring composition, light management, and photo editing. Highlighting various subjects through a technical and creative lens.",
    },
    longDescription: {
      fr: "La photographie est pour moi un moyen d'allier technique et créativité. Ce projet regroupe une série de clichés où j'ai travaillé sur la maîtrise de l'exposition, la profondeur de champ et le cadrage. J'utilise également des outils de post-traitement comme Lightroom pour sublimer les couleurs et raconter une histoire à travers l'image.  C'est une compétence complémentaire à mon profil technique, démontrant mon sens du détail et de l'esthétique.",
      en: "Photography is a way for me to combine technique and creativity. This project gathers a series of shots where I worked on mastering exposure, depth of field, and framing. I also use post-processing tools like Lightroom to enhance colors and tell a story through the image.  It is a complementary skill to my technical profile, demonstrating my eye for detail and aesthetics.",
    },
    image: "/image/photo_portfolio.png", // Pense à mettre ton image ici
    tags: {
      fr: ["Photographie", "Lightroom", "Direction Artistique", "Créativité"],
      en: ["Photography", "Lightroom", "Art Direction", "Creativity"],
    },
    // Tu pourras mettre un lien vers une galerie Flickr ou Instagram si tu veux
    liveUrl: "https://ton-lien-vers-galerie.com", 
    features: {
      fr: [
        "Maîtrise de l'exposition et de la lumière",
        "Composition et cadrage",
        "Post-traitement (Color Grading)",
        "Narration visuelle",
        "Gestion technique du matériel",
      ],
      en: [
        "Exposure and light mastery",
        "Composition and framing",
        "Post-processing (Color Grading)",
        "Visual storytelling",
        "Technical equipment management",
      ],
    },
    year: "2024",
    role: {
      fr: "Photographe & Éditeur",
      en: "Photographer & Editor",
    },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
