import React from "react";
import Head from "next/head";

const Landing: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pivovar Moucha - Originální čerstvé pivo</title>
        <meta
          name="description"
          content="Objevte Pivovar Moucha, kde se tradice mísí s inovací a precizností a každé pivo je připraveno na míru. Ochutnejte čerstvě plněné sudy!"
        />
      </Head>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center text-white pt-32"
        style={{ backgroundImage: "url('/images/dodavka.jpeg')" }}
      >
        <h1
          className="text-6xl font-extrabold mb-4 mt-64"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
        >
          Pivovar Moucha
        </h1>
        <p
          className="text-2xl mb-8 max-w-2xl text-center"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
        >
          Kde se potkává tradice a inovace. Připravte se na jedinečný zážitek a
          čerstvé pivo přímo pro vás.
        </p>
        <a
          href="/nase-piva"
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-10 rounded-full transition-all duration-300"
        >
          Prohlédnout nabídku
        </a>
      </div>
    </>
  );
};

export default Landing;
