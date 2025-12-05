import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "CinéTrack",
    description:
      "Application de suivi de films et séries avec recommandations personnalisées basées sur vos goûts cinématographiques.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    tags: ["React", "TypeScript", "API TMDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SceneBuilder",
    description:
      "Outil de création de storyboards interactifs pour réalisateurs et créateurs de contenu vidéo.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    tags: ["React", "Canvas API", "Drag & Drop"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "FilmQuotes",
    description:
      "Collection de citations de films cultes avec animation de machine à écrire et partage social.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    tags: ["Next.js", "Framer Motion", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Director's Cut",
    description:
      "Portfolio template pour réalisateurs avec galerie de projets et lecteur vidéo intégré.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80",
    tags: ["React", "Video.js", "GSAP"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "MoviePalette",
    description:
      "Extraction et analyse des palettes de couleurs des affiches de films pour inspiration design.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    tags: ["React", "Color Thief", "Tailwind"],
    liveUrl: "#",
  },
  {
    title: "SoundtrackFinder",
    description:
      "Découvrez les bandes originales de vos films préférés avec intégration Spotify.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    tags: ["React", "Spotify API", "TypeScript"],
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <FilmStrip className="absolute top-24 left-0 right-0 opacity-10" />
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Projets"
            subtitle="Ma filmographie digitale"
          />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Chaque projet est une histoire. Voici les scènes que j'ai créées, 
            alliant ma passion pour le cinéma et mon expertise en développement web.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-lg bg-card border border-border">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Un projet en tête ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Je suis toujours à la recherche de nouvelles collaborations créatives.
              Discutons de votre prochaine production !
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Action !
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
