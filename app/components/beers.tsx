"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { beers } from "./beerinfo"; // beerinfo obsahuje pole `Beer` s vlastností `available`

interface Beer {
  image: string;
  name: string;
  abv: string;
  description: string;
  available: boolean;
}

const BeerCatalog: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "available" | "unavailable"
  >("all");

  // Animace pro prvky
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Filtrování piv podle dostupnosti
  const filteredBeers = beers.filter((beer) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "available") return beer.available;
    if (selectedFilter === "unavailable") return !beer.available;
    return true;
  });

  // Pro zobrazení všech piv, ale s dostupnými na začátku
  const sortedBeers = [...filteredBeers].sort((a, b) => {
    if (a.available && !b.available) return -1; // Dostupná piva na začátek
    if (!a.available && b.available) return 1;
    return 0; // Pořadí ostatních piv zůstává stejné
  });

  // Počítání dostupných piv
  const availableCount = beers.filter((beer) => beer.available).length;

  return (
    <motion.section
      className="py-16 bg-gray-50 flex justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Hlavička sekce */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 relative inline-block text-gray-900">
            Naše piva
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-700"></span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4">
            Představujeme vám kompletní katalog našich piv. Každé pivo je
            výsledkem pečlivé práce našich sládků a odráží tradici i inovaci
            našeho pivovaru.
          </p>
        </div>

        {/* Statistika a filtrování */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-gray-700 font-medium mr-2">
              Aktuálně dostupných:
            </span>
            <span className="text-red-700 font-bold">
              {beers.filter((beer) => beer.available).length} z {beers.length}
            </span>
          </div>

          <div className="flex bg-white border border-gray-200 rounded-lg shadow-sm">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 text-sm font-medium ${
                selectedFilter === "all"
                  ? "bg-red-700 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              } rounded-l-lg`}
            >
              Všechna piva
            </button>
            <button
              onClick={() => setSelectedFilter("available")}
              className={`px-4 py-2 text-sm font-medium ${
                selectedFilter === "available"
                  ? "bg-red-700 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              } border-x border-gray-200`}
            >
              Dostupná
            </button>
            <button
              onClick={() => setSelectedFilter("unavailable")}
              className={`px-4 py-2 text-sm font-medium ${
                selectedFilter === "unavailable"
                  ? "bg-red-700 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              } rounded-r-lg`}
            >
              Nedostupná
            </button>
          </div>
        </div>

        {/* Mřížka s pivy */}
        <div>
          {sortedBeers.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Žádná piva odpovídající výběru
              </h3>
              <p className="text-gray-500">
                Zkuste změnit filtr nebo se podívejte na kompletní nabídku.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedBeers.map((beer, index) => (
                <motion.div
                  key={beer.name}
                  className="h-full"
                  variants={itemVariants}
                >
                  <div
                    className={`h-full rounded-lg shadow-lg bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col ${
                      !beer.available ? "opacity-85" : ""
                    }`}
                  >
                    {/* Badge dostupnosti */}
                    <div className="relative">
                      {/* Badge dostupnosti */}
                      <div
                        className={`absolute top-2 right-2 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
                          beer.available
                            ? "bg-green-100 text-green-800"
                            : "bg-red-200 text-red-700"
                        }`}
                      >
                        {beer.available ? "Dostupné" : "Nedostupné"}
                      </div>

                      {/* Název piva nad obrázkem */}
                      <div className="text-center pt-5 pb-3 px-6">
                        <h3 className="text-xl font-bold text-gray-900 mt-2">
                          {beer.name}
                        </h3>
                      </div>

                      {/* Obrázek piva - zvětšené etikety s obsahem alkoholu přímo v etiketě */}
                      <div className="relative h-80 bg-gray-100 flex items-center justify-center p-4 overflow-hidden group">
                        {/* Obrázek etikety - zešedne pokud není dostupné */}
                        <div className="relative">
                          <img
                            src={beer.image}
                            alt={beer.name}
                            className={`max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] ${
                              !beer.available ? "grayscale opacity-70" : ""
                            }`}
                          />

                          {/* Obsah alkoholu přímo na etiketě */}
                          <div className="absolute bottom-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">
                            {beer.abv}
                          </div>
                        </div>

                        {/* Animace bublinek při hoveru - přesunuta před etiketu s pevnými hodnotami */}
                        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          {/* První řada bublin */}
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "10%",
                              bottom: "-20px",
                              width: "8px",
                              height: "8px",
                              animationDelay: "0s",
                              animationDuration: "4s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "20%",
                              bottom: "-20px",
                              width: "12px",
                              height: "12px",
                              animationDelay: "0.5s",
                              animationDuration: "5s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "30%",
                              bottom: "-20px",
                              width: "10px",
                              height: "10px",
                              animationDelay: "1s",
                              animationDuration: "4.5s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "40%",
                              bottom: "-20px",
                              width: "15px",
                              height: "15px",
                              animationDelay: "0.7s",
                              animationDuration: "5.5s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "50%",
                              bottom: "-20px",
                              width: "10px",
                              height: "10px",
                              animationDelay: "1.2s",
                              animationDuration: "4.5s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "60%",
                              bottom: "-20px",
                              width: "12px",
                              height: "12px",
                              animationDelay: "0.3s",
                              animationDuration: "5s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "70%",
                              bottom: "-20px",
                              width: "8px",
                              height: "8px",
                              animationDelay: "0.9s",
                              animationDuration: "4s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "80%",
                              bottom: "-20px",
                              width: "14px",
                              height: "14px",
                              animationDelay: "0.5s",
                              animationDuration: "5.2s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "90%",
                              bottom: "-20px",
                              width: "10px",
                              height: "10px",
                              animationDelay: "1s",
                              animationDuration: "4.7s",
                            }}
                          ></div>

                          {/* Druhá řada bublin s menším zpožděním */}
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "15%",
                              bottom: "-20px",
                              width: "10px",
                              height: "10px",
                              animationDelay: "1.5s",
                              animationDuration: "5s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "25%",
                              bottom: "-20px",
                              width: "8px",
                              height: "8px",
                              animationDelay: "2s",
                              animationDuration: "4.2s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "35%",
                              bottom: "-20px",
                              width: "12px",
                              height: "12px",
                              animationDelay: "1.8s",
                              animationDuration: "4.8s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "45%",
                              bottom: "-20px",
                              width: "6px",
                              height: "6px",
                              animationDelay: "2.2s",
                              animationDuration: "3.5s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "55%",
                              bottom: "-20px",
                              width: "9px",
                              height: "9px",
                              animationDelay: "1.7s",
                              animationDuration: "4.3s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "65%",
                              bottom: "-20px",
                              width: "11px",
                              height: "11px",
                              animationDelay: "2.1s",
                              animationDuration: "5.1s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "75%",
                              bottom: "-20px",
                              width: "7px",
                              height: "7px",
                              animationDelay: "1.9s",
                              animationDuration: "3.9s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "85%",
                              bottom: "-20px",
                              width: "13px",
                              height: "13px",
                              animationDelay: "1.6s",
                              animationDuration: "5.3s",
                            }}
                          ></div>
                          <div
                            className="bubble absolute bg-yellow-400 opacity-70 rounded-full"
                            style={{
                              left: "95%",
                              bottom: "-20px",
                              width: "9px",
                              height: "9px",
                              animationDelay: "2.3s",
                              animationDuration: "4.4s",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <style jsx>{`
                      @keyframes rise {
                        0% {
                          transform: translateY(0);
                          opacity: 0;
                        }
                        20% {
                          opacity: 0.8;
                        }
                        100% {
                          transform: translateY(-300px);
                          opacity: 0;
                        }
                      }

                      .bubble {
                        animation: rise linear infinite;
                      }
                    `}</style>

                    {/* Popis piva */}
                    <div className="p-6 flex-grow">
                      <p className="text-gray-700">{beer.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Informace o výrobě */}
        <motion.div
          className="bg-black text-white p-8 rounded-lg mt-16"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-red-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">
                Výroba založená na tradici
              </h3>
              <p>
                Všechna naše piva vaříme tradičními postupy s důrazem na kvalitu
                surovin a řemeslnou výrobu. Používáme výhradně český slad,
                aromatický chmel a naši vlastní pivovarskou kvasinku.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BeerCatalog;
