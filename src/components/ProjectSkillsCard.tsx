import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { ExternalLink } from "lucide-react";

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
}

const ProjectSkillsCard = ({
  slug,
  title,
  image,
  skills,
  justification,
}: ProjectSkillsCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30">
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

      {/* Skills */}
      <div className="p-4 space-y-3">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-primary font-mono">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
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
