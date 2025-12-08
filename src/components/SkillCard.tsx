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
        "group relative p-6 bg-card rounded-lg border border-border",
        "transition-all duration-500 ease-out",
        "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10",
        "hover:-translate-y-1 hover:scale-[1.02]",
        className
      )}
    >
      {/* Cinema frame corners with animation */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary group-hover:w-6 group-hover:h-6 transition-all duration-300" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary group-hover:w-6 group-hover:h-6 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary group-hover:w-6 group-hover:h-6 transition-all duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 group-hover:border-primary group-hover:w-6 group-hover:h-6 transition-all duration-300" />

      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:rotate-6 transition-transform duration-300" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          
          {/* Progress bar styled like a film timeline */}
          <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-spotlight rounded-full transition-all duration-700 group-hover:brightness-125"
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
