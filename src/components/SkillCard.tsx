import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  level: number;
  className?: string;
}

const SkillCard = ({ icon: Icon, title, description, level, className }: SkillCardProps) => {
  return (
    <div
      className={cn(
        "group relative p-6 bg-card rounded-lg border border-border transition-all duration-300",
        "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {/* Cinema frame corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />

      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          
          {/* Progress bar styled like a film timeline */}
          <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-spotlight rounded-full transition-all duration-500"
              style={{ width: `${level}%` }}
            />
            {/* Film markers */}
            {[25, 50, 75].map((mark) => (
              <div
                key={mark}
                className="absolute top-0 bottom-0 w-px bg-background/50"
                style={{ left: `${mark}%` }}
              />
            ))}
          </div>
          <p className="mt-2 text-xs font-mono text-muted-foreground text-right">
            {level}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
