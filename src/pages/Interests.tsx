import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import InterestCard from "@/components/InterestCard";
import Footer from "@/components/Footer";
import { AnimatedCard } from "@/hooks/useScrollAnimation";

const interests = [
  {
    title: "Sport",
    description: "Esprit de combativité, détermination et esprit d'équipe forgés à travers le volleyball, le judo et le football.",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    tags: ["Volleyball", "Judo", "Football"],
  },
  {
    title: "Cinéma",
    description: "Amateur de films classiques et de blockbusters modernes. Fascination pour la cinématographie et la narration visuelle.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
    tags: ["Films", "Cinématographie", "Réalisation"],
  },
  {
    title: "Lecture",
    description: "Fan de romans policiers et de science-fiction. Exploration de mondes imaginaires à travers les pages.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    tags: ["Littérature", "Science-fiction", "Mystère"],
  },
  {
    title: "Jeux Vidéo",
    description: "Joueur passionné de RPG et de jeux d'aventure. Immersion totale dans des univers interactifs captivants.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    tags: ["RPG", "Aventure", "Gaming"],
  },
  {
    title: "Découvertes",
    description: "En quête permanente de nouvelles passions et expériences. Curiosité sans limites pour explorer le monde.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    tags: ["Exploration", "Curiosité", "Aventure"],
  },
];

const Interests = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navigation />
      <div className="pt-24">
        <SectionTitle title="Centre d'intérêt" />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <AnimatedCard key={index} index={index}>
                <InterestCard interest={interest} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Interests;