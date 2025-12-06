import { useState, useEffect } from "react";

interface CurtainAnimationProps {
  onComplete?: () => void;
}

const CurtainAnimation = ({ onComplete }: CurtainAnimationProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 500);

    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, 5500);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Left Curtain */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full transition-transform duration-[4500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isOpening ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          background: "linear-gradient(135deg, #8B0000 0%, #DC143C 30%, #B22222 60%, #8B0000 100%)",
          boxShadow: "inset -20px 0 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Curtain folds */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{ 
                left: `${i * 12.5}%`,
                width: "12.5%",
                background: i % 2 === 0 
                  ? "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.25) 50%, transparent 100%)"
                  : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)"
              }}
            />
          ))}
        </div>
      </div>

      {/* Right Curtain */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full transition-transform duration-[4500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isOpening ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          background: "linear-gradient(225deg, #8B0000 0%, #DC143C 30%, #B22222 60%, #8B0000 100%)",
          boxShadow: "inset 20px 0 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Curtain folds */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{ 
                left: `${i * 12.5}%`,
                width: "12.5%",
                background: i % 2 === 0 
                  ? "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.25) 50%, transparent 100%)"
                  : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurtainAnimation;
