import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import FilmStrip from "@/components/FilmStrip";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

// Official Letterboxd icon component (three dots)
const LetterboxdIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 500 500" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="129" cy="250" r="70" fill="#00E054"/>
    <circle cx="250" cy="250" r="70" fill="#40BCF4"/>
    <circle cx="371" cy="250" r="70" fill="#FF8000"/>
    <path d="M182.5 183.5a70 70 0 0 0 0 133" fill="#00D449"/>
    <path d="M317.5 183.5a70 70 0 0 1 0 133" fill="#FC7B03"/>
  </svg>
);

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Melvin472", username: "@Melvin472" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/melvin-lacote/", username: "/in/melvin-lacote" },
  { icon: LetterboxdIcon, label: "Letterboxd", href: "https://letterboxd.com/melvinlacote/", username: "@melvinlacote" },
];

const Contact = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: language === "fr" ? "Message envoyé !" : "Message sent!",
        description: language === "fr" ? "Je vous répondrai dans les plus brefs délais." : "I will get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: language === "fr" ? "Erreur" : "Error",
        description: language === "fr" ? "Une erreur est survenue. Veuillez réessayer." : "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
            title={t.contact.title}
            subtitle={language === "fr" ? "Écrivons ensemble la prochaine scène" : "Let's write the next scene together"}
          />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            {language === "fr" 
              ? "Que ce soit pour un projet, une collaboration ou simplement discuter cinéma et code, je suis à l'écoute."
              : "Whether it's for a project, collaboration or just discussing cinema and code, I'm all ears."
            }
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
                  {language === "fr" ? "Informations" : "Information"}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                    <div className="p-3 rounded-lg bg-secondary">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        {t.contact.email}
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
                        {t.contact.location}
                      </p>
                      <p className="text-foreground">Toulon, France</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {t.contact.socialProfiles}
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
                  {language === "fr" ? "Mon CV" : "My Resume"}
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
                      {t.contact.downloadCV}
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
                {language === "fr" ? "Envoyez un message" : "Send a message"}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2"
                    >
                      {language === "fr" ? "Nom" : "Name"}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === "fr" ? "Votre nom" : "Your name"}
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
                      placeholder={language === "fr" ? "votre@email.com" : "your@email.com"}
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
                    {language === "fr" ? "Sujet" : "Subject"}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={language === "fr" ? "L'objet de votre message" : "Subject of your message"}
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
                    placeholder={language === "fr" ? "Racontez-moi votre projet..." : "Tell me about your project..."}
                    rows={5}
                    required
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isLoading 
                    ? (language === "fr" ? "Envoi..." : "Sending...") 
                    : (language === "fr" ? "Envoyer" : "Send")
                  }
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
