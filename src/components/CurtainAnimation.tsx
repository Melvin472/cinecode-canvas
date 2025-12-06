import { useState, useEffect } from "react";

interface CurtainAnimationProps {
  onComplete?: () => void;
}

const CurtainAnimation = ({ onComplete }: CurtainAnimationProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Check if animation was already shown this session
    const hasSeenCurtain = sessionStorage.getItem("curtainShown");
    
    if (hasSeenCurtain) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    // Start opening animation after a brief pause
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 500);

    // Mark animation as complete
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      sessionStorage.setItem("curtainShown", "true");
      onComplete?.();
    }, 2500);

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
        className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-900 via-red-700 to-red-800 transition-transform duration-[2000ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          isOpening ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          boxShadow: "inset -20px 0 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Curtain folds */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-[12.5%] bg-gradient-to-r from-transparent via-black/20 to-transparent"
              style={{ left: `${i * 12.5}%` }}
            />
          ))}
        </div>
        {/* Gold trim */}
        <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600" />
      </div>

      {/* Right Curtain */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900 via-red-700 to-red-800 transition-transform duration-[2000ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          isOpening ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          boxShadow: "inset 20px 0 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Curtain folds */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-[12.5%] bg-gradient-to-r from-transparent via-black/20 to-transparent"
              style={{ left: `${i * 12.5}%` }}
            />
          ))}
        </div>
        {/* Gold trim */}
        <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-l from-yellow-600 via-yellow-400 to-yellow-600" />
      </div>

      {/* Top valance */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-red-950 to-red-900 z-10">
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-600" />
      </div>
    </div>
  );
};

export default CurtainAnimation;
