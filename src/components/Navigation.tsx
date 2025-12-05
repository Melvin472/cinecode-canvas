import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Film, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Accueil" },
  { path: "/skills", label: "Compétences" },
  { path: "/projects", label: "Projets" },
  { path: "/interests", label: "Centre d'intérêt" },
  { path: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Film className="w-6 h-6 text-primary transition-transform group-hover:rotate-12" />
              <Code className="w-4 h-4 text-code-green absolute -bottom-1 -right-1" />
            </div>
            <span className="font-display text-xl font-semibold text-foreground">
              Portfolio
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "relative font-mono text-sm uppercase tracking-wider transition-colors",
                    "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300",
                    "hover:text-primary hover:after:w-full",
                    isActive ? "text-primary after:w-full" : "text-muted-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "font-mono text-sm uppercase tracking-wider py-2 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;