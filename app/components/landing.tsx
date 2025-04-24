import React, { useState } from "react";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";

const Landing: React.FC = () => {
  const textControls = useAnimation();
  const [flyAnimationComplete, setFlyAnimationComplete] = useState(false);

  // Varianta animace pro zachvění mouchy při najetí myší
  const shakeAnimation = {
    hover: {
      x: [0, -5, 5, -5, 5, 0],
      y: [0, -3, 2, -2, 3, 0],
      rotate: [0, -1, 2, -2, 1, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Varianta animace pro tlačítka při najetí myší
  const buttonHoverAnimation = {
    hover: {
      scale: 1.05,
      backgroundColor: "#b91c1c",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Pivovar Moucha - Originální čerstvé pivo</title>
        <meta
          name="description"
          content="Objevte Pivovar Moucha, kde se tradice mísí s inovací a precizností a každé pivo je připraveno na míru. Ochutnejte čerstvě plněné sudy!"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <style jsx global>{`
          .glow-text {
            text-shadow: 0 0 5px rgba(239, 68, 68, 0.5),
              0 0 10px rgba(239, 68, 68, 0.3);
          }
        `}</style>
      </Head>

      {/* Hero sekce */}
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-90"></div>

        <div className="container mx-auto px-4 z-10 text-center">
          {/* Logo sekce */}
          <div className="mb-4 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <motion.img
                src="/images/hero.svg"
                alt="Pivovar Moucha"
                className="w-full h-full object-contain cursor-pointer"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(21%) sepia(100%) saturate(7414%) hue-rotate(357deg) brightness(94%) contrast(120%)",
                }}
                initial={{
                  x: -1000,
                  y: 300,
                  rotate: -45,
                  scale: 0.5,
                  opacity: 1,
                }}
                animate={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                onAnimationComplete={() => {
                  setFlyAnimationComplete(true);
                  textControls.start({ opacity: 1, y: 0 });
                }}
                whileHover="hover"
                variants={shakeAnimation}
              />
            </div>
          </div>

          {/* Název a motto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={textControls}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 font-serif text-white"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
            >
              PIVOVAR MOUCHA
            </h1>

            <div className="mb-5">
              <motion.span
                className="text-2xl md:text-3xl lg:text-3xl font-medium tracking-wide text-red-500"
                animate={{
                  opacity: [1, 0.3, 1, 0.7, 1, 0.5, 1],
                  textShadow: [
                    "0 0 5px rgba(239, 68, 68, 0.5), 0 0 10px rgba(239, 68, 68, 0.3)",
                    "0 0 2px rgba(239, 68, 68, 0.2), 0 0 4px rgba(239, 68, 68, 0.1)",
                    "0 0 7px rgba(239, 68, 68, 0.6), 0 0 14px rgba(239, 68, 68, 0.4)",
                    "0 0 3px rgba(239, 68, 68, 0.3), 0 0 6px rgba(239, 68, 68, 0.2)",
                    "0 0 5px rgba(239, 68, 68, 0.5), 0 0 10px rgba(239, 68, 68, 0.3)",
                    "0 0 2px rgba(239, 68, 68, 0.2), 0 0 4px rgba(239, 68, 68, 0.1)",
                    "0 0 5px rgba(239, 68, 68, 0.5), 0 0 10px rgba(239, 68, 68, 0.3)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 1],
                  repeatDelay: -1,
                }}
              >
                S MOUCHOU NENALETÍŠ
              </motion.span>
            </div>

            {/* Popisky */}
            <div className="mb-12 max-w-2xl mx-auto text-gray-300">
              <p
                className="text-xl leading-relaxed"
                style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
              >
                Jsme malý pivovar s velkým charakterem.
              </p>
              <p
                className="text-xl leading-relaxed"
                style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
              >
                Vaříme spodně kvašená piva, která stavíme na kvalitě a poctivé
                práci.
              </p>
              <p
                className="text-xl leading-relaxed"
                style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
              >
                Každá várka od nás má chuť, která si na nic nehraje.
              </p>
            </div>

            {/* Tlačítka a šipka */}
            <div className="mb-10 relative">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full mb-3">
                <motion.a
                  href="/nase-piva"
                  className="bg-red-600 text-white font-bold py-4 px-10 rounded-full shadow-lg w-full sm:w-80 text-center"
                  whileHover="hover"
                  variants={buttonHoverAnimation}
                  style={{ maxWidth: "320px" }}
                >
                  Aktuální nabídka piva
                </motion.a>
                <motion.a
                  href="/o-nas"
                  className="bg-red-600 text-white font-bold py-4 px-10 rounded-full shadow-lg w-full sm:w-80 text-center"
                  whileHover="hover"
                  variants={buttonHoverAnimation}
                  style={{ maxWidth: "320px" }}
                >
                  Poznej náš příběh
                </motion.a>
              </div>

              {flyAnimationComplete && (
                <div className="flex justify-center mt-4">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#e53e3e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Landing;
