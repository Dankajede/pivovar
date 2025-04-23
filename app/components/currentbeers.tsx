import React, { useRef, useState, useLayoutEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { beers } from "./beerinfo"; // uprav cestu podle struktury

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const CurrentBeerOffer: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  // Možnosti velikosti sudů
  const kegSizes = ["15l", "20l", "30l", "50l"];

  const updateHeights = () => {
    const heights = cardRefs.current.map((el) => (el ? el.offsetHeight : 0));
    setMaxHeight(Math.max(...heights));
  };

  useLayoutEffect(() => {
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  // Toggle dropdown for specific beer
  const toggleDropdown = (beerName: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [beerName]: !prev[beerName],
    }));
  };

  // Filtrace pouze dostupných piv
  const availableBeers = beers.filter((beer) => beer.available);

  return (
    <section className="py-16 px-4 container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-red-600">
        Aktuální nabídka piva
      </h2>
      <Slider {...sliderSettings}>
        {availableBeers.map((beer, index) => (
          <div key={beer.name} className="px-2">
            <div
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
              className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              {/* Horní část karty */}
              <div>
                <h3 className="text-2xl font-bold text-center text-red-600 mb-2 underline decoration-2 decoration-red-600 underline-offset-4">
                  {beer.name}
                </h3>
                <div className="w-full max-w-xs mx-auto mb-4">
                  <div className="relative">
                    <img
                      src={beer.image}
                      alt={beer.name}
                      className="w-full h-auto object-cover rounded"
                    />
                    <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                      {beer.abv}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-center">{beer.description}</p>
              </div>

              {/* Spodní část s balením */}
              <div className="mt-6">
                {/* Standardizovaný kontejner pro balení */}
                <div className="flex flex-col space-y-5">
                  {/* Box pro sudy - vedle sebe */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center space-x-2">
                      <img
                        src="/images/art 2.png"
                        alt="sudová ikona"
                        className="w-8 h-8"
                        style={{ filter: "brightness(0)" }}
                      />
                      <span className="font-medium text-gray-800">Sudy:</span>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(beer.name)}
                        className="bg-white border border-gray-300 rounded-md text-gray-700 px-3 py-1.5 flex items-center justify-between hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-150 min-w-[100px]"
                      >
                        <span>Velikost</span>
                        <svg
                          className={`w-4 h-4 ml-1 transition-transform duration-200 ${
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
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-sm">
                          <ul className="divide-y divide-gray-100">
                            {kegSizes.map((size) => (
                              <li
                                key={size}
                                className="px-3 py-2 hover:bg-red-600 hover:text-white cursor-pointer text-center transition-colors duration-150"
                                onClick={() => toggleDropdown(beer.name)}
                              >
                                {size}
                              </li>
                            ))}
                          </ul>
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
                      <span className="font-medium text-gray-800">Lahve:</span>
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
                    Koupit online
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CurrentBeerOffer;
