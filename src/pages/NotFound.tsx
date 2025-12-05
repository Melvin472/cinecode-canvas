import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Film, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex min-h-screen items-center justify-center pt-16">
        <div className="text-center px-6">
          <Film className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          
          <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground mb-4">
            404
          </h1>
          
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-2">
            // Scène non trouvée
          </p>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Cette page semble avoir été coupée au montage final.
          </p>
          
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider"
            asChild
          >
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
