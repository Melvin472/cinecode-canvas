import { cn } from "@/lib/utils";

interface FilmStripProps {
  className?: string;
  vertical?: boolean;
}

const FilmStrip = ({ className, vertical = false }: FilmStripProps) => {
  const holes = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div
      className={cn(
        "pointer-events-none select-none",
        vertical ? "w-8 h-full" : "h-8 w-full",
        className
      )}
    >
      <div
        className={cn(
          "bg-secondary/50 flex items-center",
          vertical
            ? "w-full h-full flex-col justify-start py-2 gap-3"
            : "h-full w-full flex-row justify-start px-2 gap-3"
        )}
      >
        {holes.map((i) => (
          <div
            key={i}
            className={cn(
              "rounded-sm bg-background/80 flex-shrink-0",
              vertical ? "w-4 h-3" : "w-3 h-4"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default FilmStrip;
