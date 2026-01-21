import { useState } from "react";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";
import CompetencyGroupCard from "@/components/CompetencyGroupCard";
import ProjectSkillsCard from "@/components/ProjectSkillsCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { competencyGroups, CompetencyGroup } from "@/data/competencyGroups";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareQuote, Heart } from "lucide-react";

const calculateGroupAverage = (group: CompetencyGroup): number => {
  const allSkills = group.projects.flatMap((p) => p.skills);
  if (allSkills.length === 0) return 0;
  const total = allSkills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / allSkills.length);
};

// Explanations for each competency group self-evaluation
const competencyExplanations: Record<string, { fr: string; en: string }> = {
  concevoir: {
    fr: "Ce pourcentage reflète ma capacité à refaire en autonomie les projets universitaires liés à cette compétence. La conception est au cœur de ma démarche créative : du game design aux schémas électroniques, j'ai développé une capacité à visualiser des solutions avant leur réalisation. Mon stage chez Prolexia m'a particulièrement permis de structurer ma réflexion et d'adopter une approche méthodique. Cependant, je ne suis pas à 100% car je dois encore progresser sur la formalisation de mes conceptions (diagrammes UML, documentation technique structurée) et approfondir mes connaissances en architecture logicielle pour des systèmes plus complexes.",
    en: "This percentage reflects my ability to independently redo the university projects related to this competency. Design is at the heart of my creative approach: from game design to electronic schematics, I've developed an ability to visualize solutions before implementation. My internship at Prolexia particularly helped me structure my thinking and adopt a methodical approach. However, I'm not at 100% because I still need to improve on formalizing my designs (UML diagrams, structured technical documentation) and deepen my knowledge of software architecture for more complex systems.",
  },
  verifier: {
    fr: "Ce pourcentage traduit ma confiance à reproduire en autonomie les démarches de vérification des projets universitaires. J'ai construit cette compétence projet après projet, passant de tests basiques à des méthodologies plus rigoureuses. Les algorithmes PID du robot autonome et les tests de communication Bluetooth m'ont appris l'importance d'une validation systématique. Ce qui me manque pour atteindre 100% : maîtriser les outils de tests automatisés (CI/CD), approfondir les tests de non-régression, et développer une expertise en tests de charge et de performance.",
    en: "This percentage reflects my confidence in independently reproducing the verification processes from university projects. I built this skill project by project, moving from basic tests to more rigorous methodologies. The PID algorithms of the autonomous robot and Bluetooth communication tests taught me the importance of systematic validation. What I need to reach 100%: mastering automated testing tools (CI/CD), deepening regression testing, and developing expertise in load and performance testing.",
  },
  maintenir: {
    fr: "Ce pourcentage représente ma capacité à reprendre et maintenir en autonomie les projets universitaires de cette compétence. Avec Bee's Hive et Beatmoji, j'ai appris à gérer des bases de code évolutives, à refactorer intelligemment et à documenter. Le version control est devenu un réflexe. Pour progresser vers 100%, je dois améliorer ma rigueur dans la documentation continue, maîtriser les stratégies de gestion de dette technique, et développer des compétences en monitoring et logging pour anticiper les problèmes en production.",
    en: "This percentage represents my ability to independently take over and maintain the university projects in this competency. With Bee's Hive and Beatmoji, I learned to manage evolving codebases, refactor intelligently, and document. Version control has become a reflex. To progress toward 100%, I need to improve my consistency in continuous documentation, master technical debt management strategies, and develop skills in monitoring and logging to anticipate production issues.",
  },
  implanter: {
    fr: "Ce pourcentage reflète ma confiance à réimplanter en autonomie les solutions des projets universitaires. L'implantation est le pont entre la théorie et la pratique : mes projets m'ont confronté à la réalité du terrain avec des capteurs imprévus, des protocoles à débugger, des interfaces à adapter. Le projet Bluetooth et mon stage Prolexia m'ont formé à interagir avec différents acteurs. Ce qui me manque pour 100% : approfondir la gestion des environnements de déploiement complexes, maîtriser le déploiement conteneurisé (Docker, Kubernetes), et renforcer mes compétences en intégration de systèmes hétérogènes.",
    en: "This percentage reflects my confidence in independently re-implementing the solutions from university projects. Implementation is the bridge between theory and practice: my projects confronted me with field reality - unexpected sensors, protocols to debug, interfaces to adapt. The Bluetooth project and my Prolexia internship trained me to interact with different stakeholders. What I need for 100%: deepening management of complex deployment environments, mastering containerized deployment (Docker, Kubernetes), and strengthening my skills in heterogeneous system integration.",
  },
};

// Project feelings/reflections
const projectFeelings: Record<string, { fr: string; en: string }> = {
  "jeu-unreal-engine": {
    fr: "🎮 Ce projet a été une véritable aventure ! Découvrir Unreal Engine et le C++ simultanément était ambitieux, mais la passion pour le jeu vidéo m'a porté. J'ai ressenti beaucoup de frustration au début face à la complexité du moteur, puis une immense satisfaction en voyant mes idées prendre vie. Ce projet m'a appris que la persévérance paie toujours.",
    en: "🎮 This project was a real adventure! Discovering Unreal Engine and C++ simultaneously was ambitious, but my passion for video games carried me through. I felt a lot of frustration at first facing the engine's complexity, then immense satisfaction seeing my ideas come to life. This project taught me that perseverance always pays off.",
  },
  "robot-autonome": {
    fr: "🤖 Le robot autonome restera un de mes projets les plus formateurs. Travailler sur les algorithmes PID était comme résoudre un puzzle géant - chaque ajustement avait des répercussions. J'ai adoré le côté tangible : voir le robot suivre sa trajectoire après des heures de calibration procure une satisfaction incomparable. Ce projet a confirmé mon attrait pour l'électronique embarquée.",
    en: "🤖 The autonomous robot will remain one of my most formative projects. Working on PID algorithms was like solving a giant puzzle - each adjustment had repercussions. I loved the tangible aspect: seeing the robot follow its trajectory after hours of calibration provides unparalleled satisfaction. This project confirmed my attraction to embedded electronics.",
  },
  "prolexia-oscar": {
    fr: "🌱 Mon stage chez Prolexia a été une révélation professionnelle. Travailler sur Oscar, un robot agricole avec RTK GNSS, m'a plongé dans l'innovation concrète. J'ai ressenti une vraie fierté de contribuer à un projet ayant un impact environnemental positif. Les échanges avec l'équipe technique m'ont montré l'importance de la collaboration et de la communication dans un contexte professionnel.",
    en: "🌱 My internship at Prolexia was a professional revelation. Working on Oscar, an agricultural robot with RTK GNSS, immersed me in concrete innovation. I felt real pride contributing to a project with positive environmental impact. Exchanges with the technical team showed me the importance of collaboration and communication in a professional context.",
  },
  "carte-capteur-bluetooth": {
    fr: "📡 Ce projet IoT m'a passionné de bout en bout. Concevoir une carte électronique, programmer le firmware, développer l'app React Native... C'était complet ! J'ai particulièrement aimé le défi de la communication Bluetooth, avec ses subtilités et ses moments de 'eureka' quand les données s'affichaient enfin sur l'écran du téléphone.",
    en: "📡 This IoT project fascinated me from start to finish. Designing an electronic board, programming the firmware, developing the React Native app... It was complete! I particularly enjoyed the Bluetooth communication challenge, with its subtleties and 'eureka' moments when data finally displayed on the phone screen.",
  },
  "bees-hive": {
    fr: "🐝 Bee's Hive était mon premier vrai projet de jeu complet avec Godot. Le roguelike de gestion d'abeilles m'a permis d'explorer le game design en profondeur. J'ai adoré créer des mécaniques de jeu équilibrées et voir les testeurs s'amuser avec ma création. Ce projet a nourri ma créativité et confirmé mon intérêt pour le développement de jeux.",
    en: "🐝 Bee's Hive was my first complete game project with Godot. The bee management roguelike allowed me to explore game design in depth. I loved creating balanced game mechanics and watching testers have fun with my creation. This project nurtured my creativity and confirmed my interest in game development.",
  },
  beatmoji: {
    fr: "🎵 Beatmoji combine deux de mes passions : la musique et le développement web. Créer une application interactive autour des emojis musicaux m'a permis de perfectionner mes compétences React. J'ai ressenti beaucoup de plaisir à peaufiner l'interface utilisateur et à voir les gens sourire en utilisant l'app. C'est gratifiant de créer quelque chose de ludique !",
    en: "🎵 Beatmoji combines two of my passions: music and web development. Creating an interactive application around musical emojis allowed me to perfect my React skills. I felt great pleasure polishing the user interface and seeing people smile using the app. It's rewarding to create something playful!",
  },
  "competences-globales": {
    fr: "💡 Cette section représente la synthèse de toutes mes expériences. Chaque projet m'a apporté des compétences transversales : le travail d'équipe sur les projets universitaires, l'adaptabilité face aux défis techniques, et la créativité dans la résolution de problèmes. Je me considère comme un développeur polyvalent, curieux et toujours en quête d'apprentissage.",
    en: "💡 This section represents the synthesis of all my experiences. Each project brought me transversal skills: teamwork on university projects, adaptability facing technical challenges, and creativity in problem-solving. I consider myself a versatile developer, curious and always seeking to learn.",
  },
  "cinema-audiovisuel": {
    fr: "🎬 Ma passion pour le cinéma est le fil rouge de ma créativité. Derrière la caméra, je trouve un espace d'expression unique. L'éclairage, le cadrage, la direction d'acteurs... Chaque tournage est une aventure humaine et artistique. Cette compétence me distingue et enrichit ma vision des projets numériques avec une sensibilité visuelle particulière.",
    en: "🎬 My passion for cinema is the common thread of my creativity. Behind the camera, I find a unique space for expression. Lighting, framing, directing actors... Each shoot is a human and artistic adventure. This skill distinguishes me and enriches my vision of digital projects with a particular visual sensitivity.",
  },
};

const Skills = () => {
  const { t, language } = useLanguage();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const selectedGroup = competencyGroups.find((g) => g.id === activeGroup);

  // Filter only the 4 university competencies
  const universityCompetencies = competencyGroups.filter(
    (g) => ["concevoir", "verifier", "maintenir", "implanter"].includes(g.id)
  );

  // Group projects by level
  const getProjectsByLevel = (group: CompetencyGroup) => {
    const levels: { [key: number]: typeof group.projects } = {};
    for (let i = 1; i <= group.maxLevels; i++) {
      levels[i] = group.projects.filter((p) => p.level === i);
    }
    return levels;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <FilmStrip className="absolute top-24 left-0 right-0 opacity-10" />
        <div className="container mx-auto px-6">
          <SectionTitle
            title={t.skills.title}
            subtitle={
              language === "fr"
                ? "Les outils de ma palette créative"
                : "The tools of my creative palette"
            }
          />
        </div>
      </section>

      {/* Competency Groups Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencyGroups.map((group, index) => {
              const isPalettesCreatives = group.id === "palettes-creatives";
              const shouldLinkToAllSkills = isPalettesCreatives;

              return (
                <div
                  key={group.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CompetencyGroupCard
                    title={group.title[language]}
                    description={group.description[language]}
                    icon={group.icon}
                    color={group.color}
                    isActive={activeGroup === group.id}
                    averageLevel={calculateGroupAverage(group)}
                    groupId={group.id}
                    linkToAllSkills={shouldLinkToAllSkills}
                    onClick={() =>
                      setActiveGroup(activeGroup === group.id ? null : group.id)
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Self-Evaluation Explanation Section */}
      <AnimatePresence mode="wait">
        {activeGroup && competencyExplanations[activeGroup] && (
          <motion.section
            key={`explanation-${activeGroup}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="pb-8"
          >
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-card via-card to-secondary/20 border border-border rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <MessageSquareQuote className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-sans text-lg font-semibold text-foreground mb-2">
                      {language === "fr" ? "Pourquoi cette auto-évaluation ?" : "Why this self-evaluation?"}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {competencyExplanations[activeGroup][language]}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Projects & Skills Display by Level */}
      <AnimatePresence mode="wait">
        {selectedGroup && (
          <motion.section
            key={selectedGroup.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="pb-16"
          >
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-3 mb-8">
                <selectedGroup.icon
                  className={`w-8 h-8 ${selectedGroup.color}`}
                />
                <h3 className="font-sans text-2xl font-semibold text-foreground">
                  {language === "fr"
                    ? "Projets & Compétences"
                    : "Projects & Skills"}
                  {" - "}
                  {selectedGroup.title[language]}
                </h3>
              </div>

              {/* Display by levels */}
              <div className="space-y-10">
                {Object.entries(getProjectsByLevel(selectedGroup)).map(
                  ([levelNum, projects]) => {
                    if (projects.length === 0) return null;
                    const levelIndex = parseInt(levelNum) - 1;
                    const levelLabel =
                      selectedGroup.levelLabels[language][levelIndex];

                    return (
                      <motion.div
                        key={levelNum}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: levelIndex * 0.15 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-px flex-1 bg-border" />
                          <span className="font-sans text-lg font-medium text-foreground px-4 py-1 bg-secondary rounded-full">
                            {levelLabel}
                          </span>
                          <div className="h-px flex-1 bg-border" />
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {projects.map((project, index) => (
                            <motion.div
                              key={project.slug}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: levelIndex * 0.15 + index * 0.1,
                              }}
                            >
                              <div className="space-y-4">
                                <ProjectSkillsCard
                                  slug={project.slug}
                                  title={project.title[language]}
                                  image={project.image}
                                  skills={project.skills}
                                  justification={project.justification[language]}
                                  competencyGroup={{
                                    title: selectedGroup.title[language],
                                    icon: selectedGroup.icon,
                                    color: selectedGroup.color,
                                    levelLabel: selectedGroup.levelLabels[language][project.level - 1],
                                  }}
                                />
                                {/* Project Feeling Card */}
                                {projectFeelings[project.slug] && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-secondary/30 border border-border/50 rounded-lg p-4"
                                  >
                                    <div className="flex items-center gap-2 mb-2">
                                      <Heart className="w-4 h-4 text-red-500" />
                                      <span className="text-sm font-medium text-foreground">
                                        {language === "fr" ? "Mon ressenti" : "My feelings"}
                                      </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                      {projectFeelings[project.slug][language]}
                                    </p>
                                  </motion.div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {!selectedGroup && (
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg">
                {language === "fr"
                  ? "Cliquez sur un groupe de compétences pour voir les projets associés"
                  : "Click on a competency group to see related projects"}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Quote */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xl md:text-2xl italic text-foreground mb-4">
              "Le cinéma, c'est l'écriture moderne dont l'encre est la lumière."
            </p>
            <cite className="font-mono text-sm text-primary">
              — Jean Cocteau
            </cite>
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;
