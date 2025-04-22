// pages/index.tsx
"use client";

import { useEffect } from "react";
import Script from "next/script";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).initMap = () => {
        const map = new (window as any).google.maps.Map(
          document.getElementById("map"),
          {
            center: { lat: 50.0755, lng: 14.4378 }, // nastav centrum mapy (např. Praha)
            zoom: 12,
          }
        );

        // Přidáme KML layer
        new (window as any).google.maps.KmlLayer({
          url: "https://drive.google.com/uc?export=download&id=1vCuzkw1RAeDfC8y0albHZWR6ewivCEUG",
          map: map,
          preserveViewport: false,
        });
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Importovaný Navbar */}
      <Navbar />

      {/* Header s úvodním textem */}
      <header className="bg-red-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Kam na Mouchu</h1>
          <p className="mt-2 text-lg">
            Objevte místa, kde si můžete vychutnat naše čerstvě čepované pivo.
          </p>
        </div>
      </header>

      {/* Hlavní obsah s mapou a informacemi */}
      <main className="container mx-auto px-4 py-8">
        {/* Sekce s mapou */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 ">Kde nás najdete</h2>
          <div
            id="map"
            className="w-full h-96 rounded-lg shadow-lg border-2 border-gray-200"
          ></div>
        </section>

        {/* Informační sekce */}
        <section className="text-center">
          <h2 className="text-xl font-semibold mb-3">
            Proč si vybrat naše pivo
          </h2>
          <p className="text-gray-700">
            Naše pivo je čerstvě čepované přímo na místě, připravené tak, aby
            potěšilo vaše chutě. Prohlédněte si mapu a objevte podniky, kde si
            můžete vychutnat kvalitní produkt.
          </p>
        </section>
      </main>

      {/* Importovaný Footer */}
      <Footer />

      {/* Načtení Google Maps API s callbackem initMap */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAECHaEdi9S2b95nj_JhsznwC4xBpr2a24&callback=initMap`}
        strategy="afterInteractive"
      />
    </div>
  );
}
