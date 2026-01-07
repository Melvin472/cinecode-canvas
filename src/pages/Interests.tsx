import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import InterestCard from "@/components/InterestCard";
import Footer from "@/components/Footer";
import { AnimatedCard } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Interests = () => {
  const { t, language } = useLanguage();

  const interests = [
    {
      title: language === "fr" ? "Sport" : "Sports",
      description: language === "fr" 
        ? "Esprit de combativité, détermination et esprit d'équipe forgés à travers le volleyball, le judo et le football."
        : "Fighting spirit, determination and teamwork forged through volleyball, judo and football.",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
      tags: ["Volleyball", "Judo", "Football"],
    },
    {
      title: language === "fr" ? "Cinéma" : "Cinema",
      description: language === "fr"
        ? "Amateur de films classiques et de blockbusters modernes. Fascination pour la cinématographie et la narration visuelle."
        : "Fan of classic films and modern blockbusters. Fascination for cinematography and visual storytelling.",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
      tags: [language === "fr" ? "Films" : "Films", language === "fr" ? "Cinématographie" : "Cinematography", language === "fr" ? "Réalisation" : "Directing"],
    },
    {
      title: language === "fr" ? "Théâtre" : "Theater",
      description: language === "fr"
        ? "Passionné par l'art dramatique et la scène. L'expression corporelle et vocale comme moyens de raconter des histoires captivantes."
        : "Passionate about dramatic art and the stage. Body and vocal expression as means of telling captivating stories.",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
      tags: [language === "fr" ? "Comédie" : "Comedy", language === "fr" ? "Expression" : "Expression", language === "fr" ? "Scène" : "Stage"],
    },
    {
      title: language === "fr" ? "Lecture" : "Reading",
      description: language === "fr"
        ? "Fan de romans policiers et de science-fiction. Exploration de mondes imaginaires à travers les pages."
        : "Fan of crime novels and science fiction. Exploring imaginary worlds through pages.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
      tags: [language === "fr" ? "Littérature" : "Literature", "Science-fiction", language === "fr" ? "Mystère" : "Mystery"],
    },
    {
      title: language === "fr" ? "Jeux Vidéo" : "Video Games",
      description: language === "fr"
        ? "Joueur passionné de RPG et de jeux d'aventure. Immersion totale dans des univers interactifs captivants."
        : "Passionate RPG and adventure game player. Total immersion in captivating interactive worlds.",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      tags: ["RPG", language === "fr" ? "Aventure" : "Adventure", "Gaming"],
    },
    {
      title: language === "fr" ? "Découvertes" : "Discoveries",
      description: language === "fr"
        ? "En quête permanente de nouvelles passions et expériences. Curiosité sans limites pour explorer le monde."
        : "Always seeking new passions and experiences. Boundless curiosity to explore the world.",
      image: "https://images.unsplash.com/photo-504384308090-c894fdcc538d?w=800&q=80",
      tags: ["Exploration", language === "fr" ? "Curiosité" : "Curiosity", language === "fr" ? "Aventure" : "Adventure"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navigation />
      <div className="pt-24">
        <SectionTitle title={t.interests.title} subtitle={t.interests.subtitle} />
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
