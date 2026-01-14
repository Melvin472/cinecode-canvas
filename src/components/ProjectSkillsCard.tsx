import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { ExternalLink } from "lucide-react";
import { useEffect, useState, useRef } from "react";

import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface ProjectSkillsCardProps {
  slug: string;
  title: string;
  image: string;
  skills: Skill[];
  justification?: string;
  competencyGroup?: {
    title: string;
    icon: LucideIcon;
    color: string;
    levelLabel: string;
  };
}

const ProjectSkillsCard = ({
  slug,
  title,
  image,
  skills,
  justification,
  competencyGroup,
}: ProjectSkillsCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30">
      {/* Project Header */}
      <Link to={`/projects/${slug}`} className="block relative">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-sans text-lg font-semibold text-foreground">
              {title}
            </h4>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </Link>

      {/* Competency Badge */}
      {competencyGroup && (
        <div className="px-4 pt-4">
          <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg border border-border">
            <competencyGroup.icon className={`w-4 h-4 ${competencyGroup.color} flex-shrink-0`} />
            <div className="min-w-0">
              <span className={`font-semibold text-sm ${competencyGroup.color}`}>
                {competencyGroup.title}
              </span>
              <p className="text-xs text-muted-foreground truncate">
                {competencyGroup.levelLabel}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Skills */}
      <div className="p-4 space-y-3">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-1" style={{ transitionDelay: `${index * 150}ms` }}>
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-primary font-mono">{skill.level}%</span>
            </div>
            <Progress value={isVisible ? skill.level : 0} animated={isVisible} className="h-2" />
          </div>
        ))}
        
        {/* Justification */}
        {justification && (
          <div className="mt-4 pt-3 border-t border-border">
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              {justification}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSkillsCard;
