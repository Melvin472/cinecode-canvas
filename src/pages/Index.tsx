import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clapperboard, Terminal, Code, Cpu, Gamepad2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import CodeSnippet from "@/components/CodeSnippet";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";
import { AnimatedCard } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";

const skills = [
  { icon: Code, label: "React & JavaScript", color: "text-code-green" },
  { icon: Cpu, label: "Python & Robotique", color: "text-primary" },
  { icon: Gamepad2, label: "C++ & Unreal", color: "text-cinema-red" },
];

const Index = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <Clapperboard className="w-4 h-4 text-primary animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Cinéma × Code
              </span>
              <Terminal className="w-4 h-4 text-code-green animate-pulse" />
            </div>

            {/* Main heading with staggered animation */}
            <h1 
              className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Là où le{" "}
              <span className="text-gradient-gold relative">
                7ème art
                <span className="absolute -inset-1 bg-primary/20 blur-xl rounded-lg -z-10" />
              </span>
              <br />
              rencontre le{" "}
              <span className="text-code-green relative">
                code
                <span className="absolute -inset-1 bg-code-green/20 blur-xl rounded-lg -z-10" />
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '600ms' }}
            >
              Développeur front-end passionné par le cinéma. Je crée des expériences 
              web aussi captivantes qu'une scène de film.
            </p>

            {/* Skills badges */}
            <div 
              className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '700ms' }}
            >
              {skills.map((skill, index) => (
                <div 
                  key={skill.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border hover:border-primary/50 transition-all hover:scale-105 cursor-default"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  <span className="font-mono text-xs text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '900ms' }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider group"
                asChild
              >
                <Link to="/projects">
                  Voir mes projets
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary hover:border-primary/50 font-mono uppercase tracking-wider"
                asChild
              >
                <Link to="/contact">Me contacter</Link>
              </Button>
            </div>

            {/* Code snippet */}
            <div 
              className={`max-w-md mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
              style={{ transitionDelay: '1100ms' }}
            >
              <CodeSnippet />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1300ms' }}
        >
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
        </div>
      </section>

      {/* Quick intro section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedCard>
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
          </AnimatedCard>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { value: "10+", label: "Projets réalisés", delay: 0 },
              { value: "100+", label: "Films vus", delay: 1 },
              { value: "∞", label: "Passion", delay: 2 },
            ].map((stat) => (
              <AnimatedCard key={stat.label} index={stat.delay}>
                <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
