import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  animated?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, animated = false, ...props }, ref) => {
  const [displayValue, setDisplayValue] = React.useState(animated ? 0 : value || 0);

  React.useEffect(() => {
    if (animated) {
      // Start animation after a short delay
      const timeout = setTimeout(() => {
        setDisplayValue(value || 0);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setDisplayValue(value || 0);
    }
  }, [value, animated]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 bg-gradient-to-r from-primary to-primary/80",
          animated ? "transition-transform duration-1000 ease-out" : "transition-all"
        )}
        style={{ transform: `translateX(-${100 - (displayValue || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
