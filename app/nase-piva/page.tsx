"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Beers from "../components/beers";

export default function NasePiva() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Moderní hero sekce */}
      <section className="relative flex items-center justify-center py-24 px-4 overflow-hidden">
        {/* Fotka na pozadí */}
        <img
          src="/images/sklo.jpg" // Uprav cestu k obrázku
          alt="Naše piva"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Poloprůhledná vrstva (overlay) pro lepší čitelnost textu */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Obsah sekce */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold uppercase tracking-wider text-white mb-4">
            Všechna Naše Piva
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Objevte pečlivě vybrané druhy piv, které lahodí očím i chuťovým
            buňkám. Připravujeme je s vášní a respektem k tradici.
          </p>
        </div>
      </section>

      {/* Seznam piv */}
      <div id="seznam-piv" className="container mx-auto flex-1 py-8 px-4">
        <Beers />
      </div>

      <Footer />
    </main>
  );
}
