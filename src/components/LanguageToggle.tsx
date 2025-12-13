import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("fr")}
        className={cn(
          "h-7 px-2 text-xs font-mono rounded-full transition-all",
          language === "fr"
            ? "bg-primary text-primary-foreground hover:bg-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-transparent"
        )}
      >
        FR
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={cn(
          "h-7 px-2 text-xs font-mono rounded-full transition-all",
          language === "en"
            ? "bg-primary text-primary-foreground hover:bg-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-transparent"
        )}
      >
        EN
      </Button>
    </div>
  );
};
