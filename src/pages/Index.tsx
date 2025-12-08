import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clapperboard, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import CodeSnippet from "@/components/CodeSnippet";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Cinema background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Spotlight effect */}
        <div
          className="absolute inset-0 spotlight-effect pointer-events-none transition-all duration-100"
          style={{
            "--mouse-x": `${mousePos.x}%`,
            "--mouse-y": `${mousePos.y}%`,
          } as React.CSSProperties}
        />

        {/* Film strips decoration */}
        <FilmStrip className="absolute left-0 top-20 bottom-20 opacity-20" vertical />
        <FilmStrip className="absolute right-0 top-20 bottom-20 opacity-20" vertical />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-up">
              <Clapperboard className="w-4 h-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Cinéma × Code
              </span>
              <Terminal className="w-4 h-4 text-code-green" />
            </div>

            {/* Main heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up delay-100">
              Là où le{" "}
              <span className="text-gradient-gold">7ème art</span>
              <br />
              rencontre le{" "}
              <span className="text-code-green">code</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up delay-200">
              Développeur front-end passionné par le cinéma. Je crée des expériences 
              web aussi captivantes qu'une scène de film.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up delay-300">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider"
                asChild
              >
                <Link to="/projects">
                  Voir mes projets
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary font-mono uppercase tracking-wider"
                asChild
              >
                <Link to="/contact">Me contacter</Link>
              </Button>
            </div>

            {/* Code snippet */}
            <div className="max-w-md mx-auto animate-fade-up delay-400">
              <CodeSnippet />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Quick intro section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Mon approche
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Comme un réalisateur compose ses plans, je construis des interfaces avec précision et émotion. 
              Chaque ligne de code est une prise, chaque composant une scène. Le résultat ? 
              Des applications web qui racontent une histoire et captivent les utilisateurs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              { value: "10", label: "Projets réalisés" },
              { value: "100+", label: "Films vus" },
              { value: "∞", label: "Passion" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-lg bg-card border border-border"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
