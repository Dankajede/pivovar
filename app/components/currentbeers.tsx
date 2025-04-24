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

const CurrentBeerOffer: React.FC = () => {
  // State pro rozbalení dropdown menu pro každé pivo
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  // Funkce pro přepínání stavu dropdown menu
  const toggleDropdown = (beerId: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [beerId]: !prev[beerId],
    }));
  };

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

  // Filtrování pouze dostupných piv
  const availableBeers = beers.filter((beer) => beer.available);

  // Možnosti velikosti sudů
  const barrelSizes = ["15l", "20l", "30l", "50l"];

  // Zavřít dropdown při kliknutí mimo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdowns = document.querySelectorAll(".dropdown-container");
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(event.target as Node)) {
          const beerId = dropdown.getAttribute("data-beer-id");
          if (beerId && openDropdowns[beerId]) {
            setOpenDropdowns((prev) => ({
              ...prev,
              [beerId]: false,
            }));
          }
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdowns]);

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
            Aktuální nabídka piva
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-700"></span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4">
            Představujeme vám aktuální nabídku našich piv. Každé pivo je
            výsledkem pečlivé práce našich sládků a odráží tradici i inovaci
            našeho pivovaru.
          </p>
        </div>

        {/* Mřížka s pivy */}
        <div>
          {availableBeers.length === 0 ? (
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
                Momentálně nejsou k dispozici žádná piva
              </h3>
              <p className="text-gray-500">
                Podívejte se prosím později, brzy doplníme nová piva.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableBeers.map((beer, index) => (
                <motion.div
                  key={beer.name}
                  className="h-full"
                  variants={itemVariants}
                >
                  <div className="h-full rounded-lg shadow-lg bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col">
                    {/* Badge dostupnosti */}
                    <div className="relative">
                      {/* Badge dostupnosti */}
                      <div className="absolute top-2 right-2 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        Dostupné
                      </div>
                      {/* Název piva nad obrázkem */}
                      <div className="text-center pt-5 pb-3 px-6">
                        <h3 className="text-xl font-bold text-gray-900 mt-2">
                          {beer.name}
                        </h3>
                      </div>
                      {/* Obrázek piva - zvětšené etikety s obsahem alkoholu přímo v etiketě */}
                      <div className="relative h-80 bg-gray-100 flex items-center justify-center p-4 overflow-hidden group">
                        {/* Obrázek etikety */}
                        <div className="relative">
                          <img
                            src={beer.image}
                            alt={beer.name}
                            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
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
                    {/* Sekce pro koupi piva */}
                    <div className="px-6 pb-6">
                      <div className="flex flex-col space-y-5 mt-4">
                        {/* Box pro sudy - s dropdown menu */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center space-x-2">
                            <img
                              src="/images/art 2.png"
                              alt="sudová ikona"
                              className="w-8 h-8"
                              style={{ filter: "brightness(0)" }}
                            />
                            <span className="font-medium text-gray-800">
                              Sudy:
                            </span>
                          </div>
                          <div
                            className="dropdown-container relative"
                            data-beer-id={beer.name}
                          >
                            <button
                              onClick={() => toggleDropdown(beer.name)}
                              className="bg-white border border-gray-300 rounded-md text-gray-700 px-3 py-1.5 text-center min-w-[100px] flex items-center justify-between hover:border-red-500 hover:text-red-500 transition-colors duration-200"
                            >
                              <span>
                                {openDropdowns[beer.name] ? "Vyberte" : "30l"}
                              </span>
                              <svg
                                className={`w-4 h-4 ml-2 transition-transform ${
                                  openDropdowns[beer.name] ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </button>

                            {openDropdowns[beer.name] && (
                              <div className="absolute z-20 right-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                {barrelSizes.map((size) => (
                                  <button
                                    key={size}
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                                    onClick={() => toggleDropdown(beer.name)}
                                  >
                                    {size}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Box pro lahve - vedle sebe */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center space-x-2">
                            <img
                              src="/images/Artboard 1.png"
                              alt="lahvová ikona"
                              className="w-8 h-8"
                              style={{ filter: "brightness(0)" }}
                            />
                            <span className="font-medium text-gray-800">
                              Lahve:
                            </span>
                          </div>
                          <div className="bg-white border border-gray-300 rounded-md text-gray-700 px-3 py-1.5 text-center min-w-[100px]">
                            1,5l
                          </div>
                        </div>
                      </div>

                      {/* Tlačítko koupit */}
                      <div className="mt-6">
                        <a
                          href="#"
                          className="block w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 rounded text-center transition-colors duration-150"
                        >
                          Koupit lahve online
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        {/* Informace o výrobě */}
      </div>
    </motion.section>
  );
};

export default CurrentBeerOffer;
