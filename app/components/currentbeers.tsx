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

  const updateHeights = () => {
    const heights = cardRefs.current.map((el) => (el ? el.offsetHeight : 0));
    setMaxHeight(Math.max(...heights));
  };

  useLayoutEffect(() => {
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

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

              {/* Spodní část s info a tlačítkem */}
              <div className="mt-4 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <span>Skladem:</span>
                  <img
                    src="/images/lahev.svg"
                    alt="lahvová ikona"
                    className="w-4 h-4"
                  />
                  <span>1,5l</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <span>Na plnění na počkání:</span>
                  <img
                    src="/images/sud.svg"
                    alt="sudová ikona"
                    className="w-4 h-4"
                  />
                  <span>15l / 20l / 30l / 50l</span>
                </div>
                <a
                  href="#"
                  className="block border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 px-4 rounded text-center"
                >
                  Koupit online
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CurrentBeerOffer;
