import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
          {"// "}{subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
        <div className="w-2 h-2 rotate-45 bg-primary" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
      </div>
    </div>
  );
};

export default SectionTitle;
