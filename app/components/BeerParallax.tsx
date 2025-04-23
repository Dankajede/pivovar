import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

interface BeerParallaxProps {
  className?: string;
}

const BeerParallax: React.FC<BeerParallaxProps> = ({ className }) => {
  // Reference pro container
  const containerRef = useRef<HTMLDivElement>(null);

  // State pro sledování myši
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // State pro aktivaci třesení lahví
  const [activeBottle, setActiveBottle] = useState<number | null>(null);

  // Motion values pro plynulé animace
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Sledování pohybu myši
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();

        // Vypočet relativní pozice myši v rámci containeru
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        setMousePosition({ x, y });

        // Aktualizace motion values pro plynulou animaci
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Funkce pro aktivaci třesení láhve
  const handleBottleHover = (index: number) => {
    setActiveBottle(index);

    // Reset po dokončení animace
    setTimeout(() => {
      setActiveBottle(null);
    }, 1200);
  };

  // Konfigurace lahví - vycentrované a větší
  const bottles = [
    {
      id: 1,
      xFactor: 0.04,
      yFactor: 0.03,
      position: "left-[15%] top-1/2 -translate-y-1/2",
      scale: 1.3,
      rotationAmplitude: 1.5,
    },
    {
      id: 2,
      xFactor: 0.06,
      yFactor: 0.05,
      position: "left-[35%] top-1/2 -translate-y-1/2",
      scale: 1.5,
      rotationAmplitude: 2,
    },
    {
      id: 3,
      xFactor: 0.06,
      yFactor: 0.05,
      position: "right-[35%] top-1/2 -translate-y-1/2",
      scale: 1.5,
      rotationAmplitude: 2,
    },
    {
      id: 4,
      xFactor: 0.04,
      yFactor: 0.03,
      position: "right-[15%] top-1/2 -translate-y-1/2",
      scale: 1.3,
      rotationAmplitude: 1.5,
    },
  ];

  // Propracované generování bublinek
  const generateBubbles = (bottleIndex: number) => {
    if (activeBottle !== bottleIndex) return null;

    const bubbles = [];
    const bubblesCount = 30; // Více bublinek pro lepší efekt

    for (let i = 0; i < bubblesCount; i++) {
      // Dynamické parametry pro organičtější efekt
      const size = Math.random() * 18 + 4;
      const xOffset = (Math.random() - 0.5) * 300; // Širší rozpětí pro lepší rozptyl
      const delay = Math.random() * 0.6;
      const duration = Math.random() * 1.8 + 1.2;
      const opacity = Math.random() * 0.5 + 0.3; // Různá průhlednost

      // Různé startovní pozice
      const startX = (Math.random() - 0.5) * 30;
      const startY = Math.random() * 30;

      // Vytvoření složitější trajektorie
      const controlPointX1 = startX + (Math.random() - 0.5) * 100;
      const controlPointY1 = startY - Math.random() * 100;
      const controlPointX2 = xOffset * 0.7;
      const controlPointY2 = -150 - Math.random() * 100;
      const endX = xOffset;
      const endY = -300 - Math.random() * 200;

      bubbles.push(
        <motion.div
          key={`bubble-${bottleIndex}-${i}`}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            left: `calc(50% + ${startX}px)`,
            bottom: `calc(30% + ${startY}px)`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1))",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            zIndex: (bottleIndex + 1) * 10 - 5,
          }}
          initial={{
            opacity: 0,
            scale: 0.2,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, opacity, opacity * 0.7, 0],
            scale: [0.2, 1, 0.8, 0.5],
            x: [0, controlPointX1, controlPointX2, endX],
            y: [0, controlPointY1, controlPointY2, endY],
          }}
          transition={{
            duration: duration,
            delay: delay,
            ease: "easeOut",
            times: [0, 0.3, 0.7, 1],
          }}
        />
      );
    }

    return bubbles;
  };

  // Generování světelných odlesků na lahvích
  const generateGlints = (bottleIndex: number) => {
    if (activeBottle !== bottleIndex) return null;

    const glints = [];
    const glintsCount = 7;

    for (let i = 0; i < glintsCount; i++) {
      const size = Math.random() * 20 + 10;
      const xPos = Math.random() * 80 + 10; // Pozice na láhvi (%)
      const yPos = Math.random() * 60 + 20;
      const delay = Math.random() * 0.4;
      const duration = Math.random() * 0.6 + 0.3;

      glints.push(
        <motion.div
          key={`glint-${bottleIndex}-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: size,
            height: size,
            left: `${xPos}%`,
            top: `${yPos}%`,
            filter: "blur(5px)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: duration,
            delay: delay,
            ease: "easeInOut",
          }}
        />
      );
    }

    return glints;
  };

  return (
    <div
      ref={containerRef}
      className={`relative h-[600px] w-full overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(to bottom, #1e1e1e, #462605)",
      }}
    >
      {/* Pozadí s efektem paralaxu */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('/images/drevo.jpg')",
          backgroundBlendMode: "multiply",
          x: useTransform(mouseX, [-0.5, 0.5], [-40, 40]),
          y: useTransform(mouseY, [-0.5, 0.5], [-40, 40]),
          zIndex: 1,
        }}
      />

      {/* Překryvná vrstva pro lepší hloubku */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-amber-950/30 to-black/50"
        style={{
          x: useTransform(mouseX, [-0.5, 0.5], [20, -20]),
          y: useTransform(mouseY, [-0.5, 0.5], [20, -20]),
          zIndex: 2,
        }}
      />

      {/* Světelné paprsky */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{
          x: useTransform(mouseX, [-0.5, 0.5], [50, -50]),
          y: useTransform(mouseY, [-0.5, 0.5], [50, -50]),
          zIndex: 3,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute bg-gradient-to-t from-transparent to-amber-100"
            style={{
              width: "10px",
              height: "100%",
              left: `${5 + i * 20}%`,
              transform: `rotate(${5 + i * 5}deg) translateY(-20%)`,
              opacity: 0.1,
              filter: "blur(8px)",
            }}
          />
        ))}
      </motion.div>

      {/* Ambientní bublinky v pozadí */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`ambient-bubble-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 12 + 4,
            height: Math.random() * 12 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1))",
            zIndex: 5,
          }}
          animate={{
            y: [0, -100 - Math.random() * 100],
            x: (Math.random() - 0.5) * 50,
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* Pivní láhve s dynamickým pohybem */}
      {bottles.map((bottle, index) => (
        <motion.div
          key={`bottle-${bottle.id}`}
          className={`absolute ${bottle.position}`}
          style={{
            x: useTransform(
              mouseX,
              [-0.5, 0.5],
              [-80 * bottle.xFactor * 10, 80 * bottle.xFactor * 10]
            ),
            y: useTransform(
              mouseY,
              [-0.5, 0.5],
              [-80 * bottle.yFactor * 10, 80 * bottle.yFactor * 10]
            ),
            scale: bottle.scale,
            zIndex: (bottles.length - index) * 10, // Správné vrstvení lahví
          }}
          whileHover={{
            scale: bottle.scale * 1.08,
            transition: { duration: 0.3 },
          }}
          onMouseEnter={() => handleBottleHover(index)}
        >
          <div className="relative">
            {/* Aktivační efekt při hoveru */}
            <AnimatePresence>
              {activeBottle === index && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1.5, 2.5] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255, 216, 111, 0.5), transparent 70%)",
                    filter: "blur(20px)",
                    transform: "translate(-50%, -50%)",
                    top: "50%",
                    left: "50%",
                    width: "200%",
                    height: "200%",
                    zIndex: -1,
                  }}
                />
              )}
            </AnimatePresence>

            {/* Hlavní obrázek láhve s animací třesení */}
            <motion.div
              animate={
                activeBottle === index
                  ? {
                      rotate: [
                        0,
                        -bottle.rotationAmplitude,
                        bottle.rotationAmplitude * 1.2,
                        -bottle.rotationAmplitude * 0.8,
                        bottle.rotationAmplitude * 0.5,
                        0,
                      ],
                      y: [0, -6, 3, -4, 2, 0],
                    }
                  : {
                      rotate: Math.sin(Date.now() / 3000 + index) * 0.3, // Jemný pohyb i v klidu
                    }
              }
              transition={
                activeBottle === index
                  ? { duration: 0.6, ease: "easeInOut" }
                  : { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }
              className="relative"
              style={{
                filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.7))",
              }}
            >
              <Image
                src={`/images/zelena.png`}
                alt={`Pivo ${bottle.id}`}
                width={150}
                height={400}
                className="block"
                style={{
                  transformOrigin: "bottom center",
                }}
              />

              {/* Světelné efekty na láhvi */}
              {generateGlints(index)}
            </motion.div>

            {/* Container pro bublinky */}
            <div className="absolute w-[400px] h-[500px] bottom-[100px] left-1/2 -translate-x-1/2 overflow-visible pointer-events-none">
              <AnimatePresence>{generateBubbles(index)}</AnimatePresence>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Přední částečně průhledná vrstva pro lepší efekt hloubky */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black/40 to-transparent"
        style={{
          zIndex: bottles.length * 10 + 1,
        }}
      />
    </div>
  );
};

export default BeerParallax;
