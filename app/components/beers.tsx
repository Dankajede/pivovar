import React, { useRef, useState, useLayoutEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { beers } from "./beerinfo"; // beerinfo obsahuje pole `Beer` s vlastností `available`

interface Beer {
  image: string;
  name: string;
  abv: string;
  description: string;
  available: boolean;
}

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

  // Aktualizace maximální výšky všech karet
  const updateHeights = () => {
    const heights = cardRefs.current.map((el) => (el ? el.offsetHeight : 0));
    setMaxHeight(Math.max(...heights));
  };

  useLayoutEffect(() => {
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <section className="py-16 px-4 container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-red-600">
        Aktuální nabídka piva
      </h2>
      <Slider {...sliderSettings}>
        {beers.map((beer, index) => (
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
                <h3 className="text-xl font-bold mb-2 text-center text-red-600">
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

              {/* Spodní část: podmíněné zobrazení */}
              <div className="mt-4 text-center">
                {beer.available ? (
                  <a
                    href="#"
                    className="block border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 px-4 rounded"
                  >
                    Koupit online
                  </a>
                ) : (
                  <span className="text-gray-500 font-semibold">
                    Aktuálně není k dispozici
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CurrentBeerOffer;
