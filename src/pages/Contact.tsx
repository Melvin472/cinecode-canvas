import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";

// Custom Letterboxd icon component
const LetterboxdIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 500 500" 
    className={className}
    fill="currentColor"
  >
    <path d="M250 500C111.929 500 0 388.071 0 250S111.929 0 250 0s250 111.929 250 250-111.929 250-250 250z"/>
    <path fill="#00E054" d="M250 139.5c-33.084 0-63.623 10.975-88.125 29.479l88.125 81.021 88.125-81.021C313.623 150.475 283.084 139.5 250 139.5z"/>
    <path fill="#40BCF4" d="M161.875 168.979C133.979 193.479 116.5 230.021 116.5 271c0 61.021 43.271 111.896 100.875 123.521L161.875 168.979z"/>
    <path fill="#FF8000" d="M338.125 168.979L282.625 394.521C340.229 382.896 383.5 332.021 383.5 271c0-40.979-17.479-77.521-45.375-102.021z"/>
  </svg>
);

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Melvin472", username: "@Melvin472" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/melvin-lacote/", username: "/in/melvin-lacote" },
  { icon: LetterboxdIcon, label: "Letterboxd", href: "https://letterboxd.com/melvinlacote/", username: "@melvinlacote" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <FilmStrip className="absolute top-24 left-0 right-0 opacity-10" />
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Contact"
            subtitle="Écrivons ensemble la prochaine scène"
          />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Que ce soit pour un projet, une collaboration ou simplement discuter 
            cinéma et code, je suis à l'écoute.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Informations
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                    <div className="p-3 rounded-lg bg-secondary">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        Email
                      </p>
                      <p className="text-foreground">melvin.lacote@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                    <div className="p-3 rounded-lg bg-secondary">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        Localisation
                      </p>
                      <p className="text-foreground">Toulon, France</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Réseaux sociaux
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* CV Download */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Mon CV
                </h3>
                <a
                  href="/documents/Melvin_Lacote_CV.pdf"
                  download="Melvin_Lacote_CV.pdf"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <FileDown className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                      Télécharger mon CV
                    </p>
                    <p className="text-xs text-muted-foreground">PDF • Melvin Lacote</p>
                  </div>
                </a>
              </div>

              {/* Film quote */}
              <blockquote className="p-6 rounded-lg bg-card border border-border">
                <LetterboxdIcon className="w-6 h-6 text-primary mb-3" />
                <p className="font-display text-lg italic text-foreground mb-2">
                  "This is the beginning of a beautiful friendship."
                </p>
                <cite className="font-mono text-sm text-muted-foreground">
                  — Casablanca (1942)
                </cite>
              </blockquote>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Envoyez un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2"
                    >
                      Nom
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2"
                  >
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="L'objet de votre message"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Racontez-moi votre projet..."
                    rows={5}
                    required
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
