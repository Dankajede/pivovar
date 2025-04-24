import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";

const landing: React.FC = () => {
  const textControls = useAnimation();

  // Funkce pro synchronizaci animací
  const handleFlyProgress = (progress: number) => {
    // Když let mouchy dosáhne 70% (0.7), začneme animovat text
    if (progress >= 0.7) {
      textControls.start({ opacity: 1, y: 0 });
    }
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
      </Head>

      {/* Hero sekce */}
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white relative">
        {/* Pozadí s jemným efektem */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-90"></div>

        <div className="container mx-auto px-4 z-10 text-center">
          {/* Logo sekce - červená moucha s animací */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <motion.img
                src="/images/hero.svg"
                alt="Pivovar Moucha"
                className="w-full h-full object-contain"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(21%) sepia(100%) saturate(7414%) hue-rotate(357deg) brightness(94%) contrast(120%)",
                }}
                initial={{
                  x: -1000,
                  y: 300,
                  rotate: -45,
                  scale: 0.5,
                  opacity: 0.8,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
                onUpdate={(latest) => {
                  // Vypočtení progresu animace (0-1)
                  const xProgress = 1 - Math.abs(latest.x as number) / 1000;
                  handleFlyProgress(xProgress);
                }}
              />
            </div>
          </div>

          {/* Název a motto - synchronizované s letem mouchy */}
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
            <p
              className="text-xl md:text-2xl mb-8 font-light tracking-wide text-white"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              S MOUCHOU NENALETÍŠ
            </p>

            {/* Popisek */}
            <p
              className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-300"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Malý pivovar s velkým charakterem. Vaříme klasické ležáky s
              důrazem na kvalitu a poctivé řemeslo.
            </p>

            {/* Tlačítka - v červené barvě */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a
                href="/nase-piva"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg min-w-52"
              >
                Aktuální nabídka piva
              </a>
              <a
                href="/o-nas"
                className="bg-transparent border-2 border-red-600 hover:bg-red-600/10 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 min-w-52"
              >
                Poznej náš příběh
              </a>
            </div>
          </motion.div>

          {/* Jemná animace dolů */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <motion.svg
              className="w-8 h-8 text-red-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default landing;
