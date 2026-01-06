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
  level: number; // 1, 2, or 3 for hierarchy
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
      fr: ["Niveau 1 - Initiation", "Niveau 2 - Intermédiaire", "Niveau 3 - Avancé"],
      en: ["Level 1 - Beginner", "Level 2 - Intermediate", "Level 3 - Advanced"],
    },
    projects: [
      {
        slug: "jeu-unreal-engine",
        title: {
          fr: "Jeu Vidéo - Unreal Engine",
          en: "Video Game - Unreal Engine",
        },
        image: "/image/unreal.png",
        level: 1,
        skills: [
          { name: "Game Design", level: 80 },
          { name: "Unreal Engine", level: 75 },
          { name: "C++", level: 72 },
          { name: "3D Environments", level: 70 },
        ],
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
      fr: ["Niveau 1 - Initiation", "Niveau 2 - Intermédiaire", "Niveau 3 - Avancé"],
      en: ["Level 1 - Beginner", "Level 2 - Intermediate", "Level 3 - Advanced"],
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
      fr: ["Niveau 1 - Initiation", "Niveau 2 - Confirmé"],
      en: ["Level 1 - Beginner", "Level 2 - Confirmed"],
    },
    projects: [
      {
        slug: "bees-hive",
        title: {
          fr: "Bee's Hive - Roguelike Gestion",
          en: "Bee's Hive - Roguelike Management",
        },
        image: "/image/beeshive.png",
        level: 1,
        skills: [
          { name: "Godot Engine", level: 80 },
          { name: "GDScript", level: 78 },
          { name: "Version control", level: 85 },
          { name: "Documentation", level: 75 },
        ],
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
      fr: ["Niveau 1 - Initiation", "Niveau 2 - Confirmé"],
      en: ["Level 1 - Beginner", "Level 2 - Confirmed"],
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
      },
    ],
  },
];
