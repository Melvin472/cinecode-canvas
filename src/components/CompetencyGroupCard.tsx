import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CompetencyGroupCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  isActive: boolean;
  averageLevel: number;
  onClick: () => void;
  groupId?: string;
  linkToAllSkills?: boolean;
}

const CompetencyGroupCard = ({
  title,
  description,
  icon: Icon,
  color,
  isActive,
  averageLevel,
  onClick,
  groupId,
  linkToAllSkills = false,
}: CompetencyGroupCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (linkToAllSkills) {
      navigate("/skills/all");
    } else {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group relative w-full p-6 rounded-xl border-2 transition-all duration-300 text-left",
        "hover:scale-[1.02] hover:shadow-xl",
        isActive
          ? "border-primary bg-primary/10 shadow-lg"
          : "border-border bg-card hover:border-primary/50",
        linkToAllSkills && "hover:border-accent hover:bg-accent/5"
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "p-3 rounded-lg transition-colors duration-300",
            isActive ? "bg-primary text-primary-foreground" : "bg-muted",
            color
          )}
        >
          <Icon className={cn("w-6 h-6", isActive && "text-primary-foreground")} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-sans text-xl font-semibold text-foreground">
              {title}
            </h3>
            <span className={cn(
              "font-mono text-lg font-bold",
              isActive ? "text-primary" : "text-muted-foreground"
            )}>
              {averageLevel}%
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          {linkToAllSkills && (
            <p className="text-xs text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Cliquez pour voir toutes les compétences →
            </p>
          )}
        </div>
      </div>
      
      {/* Indicator */}
      <div
        className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-t-full transition-all duration-300",
          isActive ? "bg-primary" : "bg-transparent"
        )}
      />
    </button>
  );
};

export default CompetencyGroupCard;
