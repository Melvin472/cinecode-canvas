import { cn } from "@/lib/utils";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  className,
}: ProjectCardProps) => {
  return (
      <div
        className={cn(
          "group relative bg-white rounded-lg overflow-hidden border border-border transition-all duration-500",
          "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10",
        className
        )}
      >
      {/* Image with overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-4 rounded-full bg-primary/90 text-primary-foreground transform scale-90 group-hover:scale-100 transition-transform">
            <Play className="w-8 h-8" fill="currentColor" />
          </div>
        </div>

        {/* Film frame lines */}
        <div className="absolute top-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-xs font-mono text-foreground/70">SCENE_01</div>
          <div className="text-xs font-mono text-foreground/70">TAKE_01</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono bg-secondary text-primary rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
