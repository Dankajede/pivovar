import React from "react";

const Ad1: React.FC = () => {
  return (
    <section className="relative py-20 px-4 container mx-auto rounded-lg shadow-lg text-white text-center overflow-hidden">
      {/* Obrázek na pozadí s úpravou polohy a měřítka */}
      <img
        src="/images/sudy.png"
        alt="Plnění piva"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: "center", // posuneme vertikálně dolů (místo default 50%)
          // posuň dolů a jemně oddal (zmenšení)
        }}
      />

      {/* Barevný průhledný overlay */}
      <div className="absolute inset-0 bg-red-700 bg-opacity-70"></div>

      {/* Obsah */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl font-extrabold mb-4">Plníme pivo na počkání</h2>
        <p className="text-xl mb-6 max-w-xl">
          Nabízíme sudy ve velikostech 15L, 30L a 50L – pro každou příležitost.
        </p>
        <p className="text-2xl font-semibold max-w-2xl">
          &ldquo;Čerstvost v každém doušku přímo pro Vás – plníme na
          míru!&rdquo;
        </p>
      </div>
    </section>
  );
};

export default Ad1;
