import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FilmStrip from "@/components/FilmStrip";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const title = project.title[language];
  const description = project.description[language];
  const longDescription = project.longDescription[language];
  const tags = project.tags[language];
  const features = project.features[language];
  const role = project.role[language];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 relative">
        <FilmStrip className="absolute top-20 left-0 right-0 opacity-10" />
        <div className="container mx-auto px-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "fr" ? "Retour aux projets" : "Back to projects"}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden border border-border group">
              <img
                src={project.image}
                alt={title}
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Film frame overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between opacity-60">
                <div className="text-xs font-mono text-foreground/70 bg-background/50 px-2 py-1 rounded">
                  PROJECT_{project.slug.toUpperCase().replace(/-/g, "_")}
                </div>
                <div className="text-xs font-mono text-foreground/70 bg-background/50 px-2 py-1 rounded">
                  {project.year}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm">{project.year}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border">
                  <User className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm">{role}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-mono bg-primary/10 text-primary border border-primary/20 rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border hover:border-primary hover:text-primary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      {language === "fr" ? "Voir le code" : "View code"}
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      {language === "fr" ? "Voir le projet" : "View project"}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Long Description */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-8 h-0.5 bg-primary"></span>
                {language === "fr" ? "À propos du projet" : "About the project"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-8 h-0.5 bg-primary"></span>
                {language === "fr" ? "Fonctionnalités" : "Features"}
              </h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-mono text-xs">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            {language === "fr" ? "Ce projet vous intéresse ?" : "Interested in this project?"}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === "fr"
              ? "N'hésitez pas à me contacter pour en discuter ou explorer d'autres projets."
              : "Feel free to contact me to discuss or explore other projects."}
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/projects">
                {language === "fr" ? "Autres projets" : "Other projects"}
              </Link>
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">
                {language === "fr" ? "Me contacter" : "Contact me"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
