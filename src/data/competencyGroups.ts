import { LucideIcon, Lightbulb, Search, Settings, Puzzle } from "lucide-react";

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
    projects: [
      {
        slug: "robot-autonome",
        title: {
          fr: "Robot Autonome",
          en: "Autonomous Robot",
        },
        image: "/image/robot.png",
        skills: [
          { name: "Architecture système", level: 85 },
          { name: "Conception mécanique", level: 75 },
          { name: "Algorithmes PID", level: 90 },
          { name: "Python", level: 88 },
        ],
      },
      {
        slug: "prolexia-oscar",
        title: {
          fr: "Stage Prolexia - Robot Oscar",
          en: "Prolexia Internship - Oscar Robot",
        },
        image: "/image/prolexia.png",
        skills: [
          { name: "KICAD", level: 85 },
          { name: "RTK GNSS", level: 80 },
          { name: "Conception PCB", level: 82 },
          { name: "Électronique embarquée", level: 78 },
        ],
      },
      {
        slug: "jeu-unreal-engine",
        title: {
          fr: "Jeu Vidéo - Unreal Engine",
          en: "Video Game - Unreal Engine",
        },
        image: "/image/unreal.png",
        skills: [
          { name: "Game Design", level: 80 },
          { name: "Unreal Engine", level: 75 },
          { name: "C++", level: 72 },
          { name: "3D Environments", level: 70 },
        ],
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
    projects: [
      {
        slug: "prolexia-oscar",
        title: {
          fr: "Stage Prolexia - Robot Oscar",
          en: "Prolexia Internship - Oscar Robot",
        },
        image: "/image/prolexia.png",
        skills: [
          { name: "Tests physiques", level: 88 },
          { name: "Validation système", level: 85 },
          { name: "Debugging", level: 82 },
          { name: "Optimisation PID", level: 90 },
        ],
      },
      {
        slug: "robot-autonome",
        title: {
          fr: "Robot Autonome",
          en: "Autonomous Robot",
        },
        image: "/image/robot.png",
        skills: [
          { name: "Tests unitaires", level: 80 },
          { name: "Analyse de performance", level: 78 },
          { name: "Calibration capteurs", level: 85 },
        ],
      },
      {
        slug: "carte-capteur-bluetooth",
        title: {
          fr: "Carte Capteur Bluetooth",
          en: "Bluetooth Sensor Board",
        },
        image: "/image/nrfconnect.png",
        skills: [
          { name: "Tests BLE", level: 82 },
          { name: "Validation données", level: 85 },
          { name: "Debugging wireless", level: 78 },
        ],
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
    projects: [
      {
        slug: "beatmoji",
        title: {
          fr: "Beatmoji",
          en: "Beatmoji",
        },
        image: "/image/Beatmoji.png",
        skills: [
          { name: "React", level: 85 },
          { name: "Gestion état", level: 80 },
          { name: "API integration", level: 82 },
          { name: "Code refactoring", level: 78 },
        ],
      },
      {
        slug: "bees-hive",
        title: {
          fr: "Bee's Hive - Roguelike Gestion",
          en: "Bee's Hive - Roguelike Management",
        },
        image: "/image/beeshive.png",
        skills: [
          { name: "Godot Engine", level: 80 },
          { name: "GDScript", level: 78 },
          { name: "Version control", level: 85 },
          { name: "Documentation", level: 75 },
        ],
      },
    ],
  },
  {
    id: "integrer",
    title: {
      fr: "Intégrer",
      en: "Integrate",
    },
    description: {
      fr: "Intégration de systèmes et composants",
      en: "System and component integration",
    },
    icon: Puzzle,
    color: "text-purple-500",
    projects: [
      {
        slug: "carte-capteur-bluetooth",
        title: {
          fr: "Carte Capteur Bluetooth",
          en: "Bluetooth Sensor Board",
        },
        image: "/image/nrfconnect.png",
        skills: [
          { name: "Bluetooth BLE", level: 85 },
          { name: "React Native", level: 80 },
          { name: "Arduino", level: 82 },
          { name: "IoT protocols", level: 78 },
        ],
      },
      {
        slug: "prolexia-oscar",
        title: {
          fr: "Stage Prolexia - Robot Oscar",
          en: "Prolexia Internship - Oscar Robot",
        },
        image: "/image/prolexia.png",
        skills: [
          { name: "Intégration capteurs", level: 88 },
          { name: "RTK GNSS", level: 82 },
          { name: "Communication série", level: 80 },
          { name: "Firmware", level: 75 },
        ],
      },
      {
        slug: "beatmoji",
        title: {
          fr: "Beatmoji",
          en: "Beatmoji",
        },
        image: "/image/Beatmoji.png",
        skills: [
          { name: "API Spotify", level: 82 },
          { name: "Backend integration", level: 78 },
          { name: "Mobile deployment", level: 80 },
        ],
      },
    ],
  },
];
