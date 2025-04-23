// components/Fly.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Fly: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isReturning, setIsReturning] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsReturning(false);
  };

  const handleAnimationComplete = () => {
    if (isHovering) {
      setIsHovering(false);
      setIsReturning(true);
    } else if (isReturning) {
      setIsReturning(false);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <motion.div
        initial={{ left: "50%", y: 0, opacity: 1 }}
        animate={{
          left: isHovering ? "100%" : isReturning ? "50%" : "50%",
          y: [0, -15, 10, -5, 0],
          opacity: 1,
        }}
        transition={{
          left: {
            duration: isHovering || isReturning ? 2 : 0,
            ease: "easeInOut",
          },
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          },
        }}
        onMouseEnter={handleMouseEnter}
        onAnimationComplete={handleAnimationComplete}
        style={{
          position: "absolute",
          width: "120px",
          height: "auto",
          zIndex: 10,
          top: "50%", // Umístěno na 50% od vrcholu kontejneru
          marginTop: "-45px", // Posunuto nahoru o 30px
          transform: "translateY(-50%)",
          pointerEvents: "auto",
          cursor: "pointer",
        }}
      >
        {/* Čárky pohybu */}
        {(isHovering || isReturning) && (
          <div
            style={{
              position: "absolute",
              right: isReturning ? "auto" : "100%",
              left: isReturning ? "100%" : "auto",
              top: 0,
              bottom: 0,
              width: "60px",
            }}
          >
            {[...Array(8)].map((_, groupIndex) => (
              <div
                key={`group-${groupIndex}`}
                style={{
                  position: "absolute",
                  left: isReturning
                    ? `${groupIndex * 7}px`
                    : `${(7 - groupIndex) * 7}px`,
                  top: `${35 + (groupIndex % 4) * 10}%`,
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`line-${groupIndex}-${i}`}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      x: isReturning ? [-5, -15] : [5, 15],
                    }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.1 + groupIndex * 0.05,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    style={{
                      width: 6 - i,
                      height: 2,
                      background: "#FFE4B5",
                      margin: "3px 0",
                      borderRadius: "2px",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Obrázek mouchy */}
        <img
          src="/images/maskotik.png"
          alt="Létající maskot pivovaru"
          style={{
            width: "100%",
            transform: isReturning ? "scaleX(-1)" : "none",
            position: "relative",
            zIndex: 1,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Fly;
