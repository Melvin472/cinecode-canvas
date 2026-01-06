import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompetencyGroupCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

const CompetencyGroupCard = ({
  title,
  description,
  icon: Icon,
  color,
  isActive,
  onClick,
}: CompetencyGroupCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full p-6 rounded-xl border-2 transition-all duration-300 text-left",
        "hover:scale-[1.02] hover:shadow-xl",
        isActive
          ? "border-primary bg-primary/10 shadow-lg"
          : "border-border bg-card hover:border-primary/50"
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
          <h3 className="font-display text-xl font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
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
