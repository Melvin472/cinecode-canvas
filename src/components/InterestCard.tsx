interface Interest {
    title: string;
    description: string;
    image: string;
    tags: string[];
  }
  
  interface InterestCardProps {
    interest: Interest;
  }
  
  const InterestCard = ({ interest }: InterestCardProps) => {
    return (
      <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-hidden h-48">
          <img
            src={interest.image}
            alt={interest.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-foreground">{interest.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{interest.description}</p>
          <div className="flex flex-wrap gap-2">
            {interest.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default InterestCard;