import { Film, Code, Heart } from "lucide-react";
import FilmStrip from "./FilmStrip";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-border bg-card/50">
      <FilmStrip className="absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Film className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">×</span>
            <Code className="w-5 h-5 text-code-green" />
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            Créé avec <Heart className="inline w-4 h-4 text-cinema-red mx-1" /> passion pour le cinéma et le code
          </p>
          
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
