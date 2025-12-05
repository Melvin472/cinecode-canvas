import { cn } from "@/lib/utils";

interface CodeSnippetProps {
  className?: string;
}

const CodeSnippet = ({ className }: CodeSnippetProps) => {
  return (
    <div
      className={cn(
        "font-mono text-xs sm:text-sm bg-secondary/30 rounded-lg p-4 border border-border overflow-hidden",
        className
      )}
    >
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-cinema-red" />
        <div className="w-3 h-3 rounded-full bg-primary" />
        <div className="w-3 h-3 rounded-full bg-code-green" />
      </div>
      <pre className="text-muted-foreground overflow-x-auto">
        <code>
          <span className="text-cinema-red">const</span>{" "}
          <span className="text-foreground">developer</span>{" "}
          <span className="text-muted-foreground">=</span> {"{"}
          {"\n"}
          {"  "}
          <span className="text-code-green">passion</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-primary">"cinéma"</span>,{"\n"}
          {"  "}
          <span className="text-code-green">skills</span>
          <span className="text-muted-foreground">:</span> [
          <span className="text-primary">"React"</span>,{" "}
          <span className="text-primary">"TypeScript"</span>],{"\n"}
          {"  "}
          <span className="text-code-green">creativity</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-cinema-red">Infinity</span>
          {"\n"}
          {"}"};
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
