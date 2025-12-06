import { useState, useEffect } from "react";

interface CurtainAnimationProps {
  onComplete?: () => void;
}

const CurtainAnimation = ({ onComplete }: CurtainAnimationProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start opening animation after a brief pause
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 800);

    // Mark animation as complete
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, 4000);

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
        className={`absolute top-0 left-0 w-1/2 h-full transition-transform duration-[3000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isOpening ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          background: "linear-gradient(135deg, #8B0000 0%, #DC143C 25%, #B22222 50%, #8B0000 75%, #660000 100%)",
          boxShadow: "inset -30px 0 60px rgba(0,0,0,0.6), inset 0 0 100px rgba(139,0,0,0.3)",
        }}
      >
        {/* Velvet texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)"
        }} />
        {/* Curtain folds with depth */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{ 
                left: `${i * 8.33}%`,
                width: "8.33%",
                background: i % 2 === 0 
                  ? "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)"
                  : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)"
              }}
            />
          ))}
        </div>
        {/* Gold tassel trim */}
        <div className="absolute top-0 right-0 w-6 h-full" style={{
          background: "linear-gradient(180deg, #FFD700 0%, #DAA520 20%, #B8860B 40%, #FFD700 60%, #DAA520 80%, #B8860B 100%)",
          boxShadow: "-2px 0 10px rgba(218,165,32,0.5)"
        }} />
        {/* Decorative cord */}
        <div className="absolute top-1/4 right-4 w-2 h-32 rounded-full" style={{
          background: "linear-gradient(180deg, #FFD700, #B8860B, #FFD700)",
          boxShadow: "0 0 10px rgba(255,215,0,0.5)"
        }} />
      </div>

      {/* Right Curtain */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full transition-transform duration-[3000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isOpening ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          background: "linear-gradient(225deg, #8B0000 0%, #DC143C 25%, #B22222 50%, #8B0000 75%, #660000 100%)",
          boxShadow: "inset 30px 0 60px rgba(0,0,0,0.6), inset 0 0 100px rgba(139,0,0,0.3)",
        }}
      >
        {/* Velvet texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)"
        }} />
        {/* Curtain folds with depth */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{ 
                left: `${i * 8.33}%`,
                width: "8.33%",
                background: i % 2 === 0 
                  ? "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)"
                  : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)"
              }}
            />
          ))}
        </div>
        {/* Gold tassel trim */}
        <div className="absolute top-0 left-0 w-6 h-full" style={{
          background: "linear-gradient(180deg, #FFD700 0%, #DAA520 20%, #B8860B 40%, #FFD700 60%, #DAA520 80%, #B8860B 100%)",
          boxShadow: "2px 0 10px rgba(218,165,32,0.5)"
        }} />
        {/* Decorative cord */}
        <div className="absolute top-1/4 left-4 w-2 h-32 rounded-full" style={{
          background: "linear-gradient(180deg, #FFD700, #B8860B, #FFD700)",
          boxShadow: "0 0 10px rgba(255,215,0,0.5)"
        }} />
      </div>

      {/* Top valance with ornate design */}
      <div className="absolute top-0 left-0 right-0 h-20 z-10" style={{
        background: "linear-gradient(180deg, #4A0000 0%, #8B0000 50%, #660000 100%)",
        boxShadow: "0 5px 20px rgba(0,0,0,0.5)"
      }}>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,215,0,0.2) 40px, rgba(255,215,0,0.2) 42px)"
        }} />
        {/* Gold fringe */}
        <div className="absolute bottom-0 left-0 right-0 h-6" style={{
          background: "linear-gradient(180deg, #FFD700 0%, #DAA520 50%, #B8860B 100%)",
          boxShadow: "0 2px 10px rgba(218,165,32,0.8)"
        }} />
        {/* Scalloped edge effect */}
        <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-8 h-4 mx-1 rounded-b-full" style={{
              background: "linear-gradient(180deg, #B8860B, #DAA520)"
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurtainAnimation;
