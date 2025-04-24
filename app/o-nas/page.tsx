"use client";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  // Animace pro prvky stránky
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <Navbar />

      {/* Hero sekce */}
      <div className="relative bg-black h-64 md:h-80">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            NÁŠ PIVOVAR
          </h1>
          <div className="w-20 h-1 bg-red-700 mb-4"></div>
          <p className="text-lg text-center max-w-2xl">
            Tradice, kvalita a vášeň pro vaření piva od roku 2017
          </p>
        </div>
      </div>

      {/* Hlavní obsah */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Naše historie */}
          <motion.section
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Naše historie
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-700"></span>
              </h2>
              <p className="text-gray-700 mb-4">
                Náš pivovar byl založen v roce 1874 mistrem sládkem Josefem
                Novotným, který se rozhodl vybudovat malý rodinný pivovar na
                východě Čech. S původní varnou o objemu pouhých 500 litrů začal
                vařit pivo podle receptury, kterou zdědil po svém otci.
              </p>
              <p className="text-gray-700 mb-4">
                V průběhu 20. století pivovar prošel mnoha změnami. Přežil obě
                světové války, znárodnění v roce 1948 i následnou privatizaci v
                90. letech. V roce 2008 převzala pivovar nová generace nadšenců,
                kteří se rozhodli obnovit původní slávu pivovaru a vrátit se ke
                kořenům tradičního českého pivovarnictví.
              </p>
              <p className="text-gray-700">
                Dnes náš pivovar spojuje tradiční postupy s moderními
                technologiemi, aby nabídl milovníkům piva jedinečný zážitek.
                Naše piva získala řadu ocenění na domácích i mezinárodních
                soutěžích.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gray-300 rounded-lg overflow-hidden h-80 md:h-96 relative">
              {/* Zde by bylo vhodné použít skutečný obrázek z historie pivovaru */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Historická fotografie pivovaru</p>
              </div>
            </div>
          </motion.section>

          {/* Naše filozofie */}
          <motion.section
            variants={itemVariants}
            className="bg-black text-white p-8 md:p-12 rounded-lg"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 relative inline-block">
                Naše filozofie
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-700"></span>
              </h2>
              <p className="mb-6 text-lg">
                „Věříme, že dobré pivo se rodí z kvalitních surovin, poctivé
                práce a trpělivosti. Není potřeba spěchat - dobré věci vyžadují
                čas."
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                <div className="flex flex-col items-center max-w-xs">
                  <div className="bg-red-700 p-4 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Kvalita</h3>
                  <p>
                    Používáme pouze nejkvalitnější suroviny a dbáme na každý
                    detail výrobního procesu.
                  </p>
                </div>
                <div className="flex flex-col items-center max-w-xs">
                  <div className="bg-red-700 p-4 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tradice</h3>
                  <p>
                    Vycházíme z tradičních receptur a postupů, které se v našem
                    pivovaru předávají po generace.
                  </p>
                </div>
                <div className="flex flex-col items-center max-w-xs">
                  <div className="bg-red-700 p-4 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Inovace</h3>
                  <p>
                    Nebojíme se experimentovat a přinášet nové chutě, které
                    potěší i nejnáročnější pivní znalce.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Náš tým */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 relative inline-block">
              Náš tým
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-700"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sládek */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-300 relative">
                  {/* Zde by byla fotografie člena týmu */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600">Fotografie sládka</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">
                    Petr Kovář
                  </h3>
                  <p className="text-red-700 font-medium mb-4">Hlavní sládek</p>
                  <p className="text-gray-700">
                    S více než 20 lety zkušeností v pivovarnictví je Petr duší
                    našeho pivovaru. Jeho znalost tradičních postupů a cit pro
                    inovace stojí za jedinečnou chutí našich piv.
                  </p>
                </div>
              </div>

              {/* Technolog */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-300 relative">
                  {/* Zde by byla fotografie člena týmu */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600">Fotografie technologa</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">
                    Jana Nováková
                  </h3>
                  <p className="text-red-700 font-medium mb-4">Technolog</p>
                  <p className="text-gray-700">
                    Jana dohlíží na kvalitu každé várky. Její preciznost a
                    důslednost zajišťují, že každý doušek našeho piva je
                    dokonalý.
                  </p>
                </div>
              </div>

              {/* Majitel */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-300 relative">
                  {/* Zde by byla fotografie člena týmu */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600">Fotografie majitele</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">
                    Martin Dvořák
                  </h3>
                  <p className="text-red-700 font-medium mb-4">Majitel</p>
                  <p className="text-gray-700">
                    Martinova vášeň pro pivo a podnikatelský duch přivedl náš
                    pivovar k novému rozkvětu. Pod jeho vedením se z malého
                    pivovaru stala respektovaná značka.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Výrobní proces */}
          <motion.section
            variants={itemVariants}
            className="grid md:grid-cols-5 gap-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block md:col-span-5">
              Jak vaříme naše pivo
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-700"></span>
            </h2>

            {/* Krok 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Šrotování sladu</h3>
              <p className="text-gray-700">
                Začínáme šrotováním kvalitního sladu, který je základem dobrého
                piva.
              </p>
            </div>

            {/* Krok 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Vystírání a rmutování</h3>
              <p className="text-gray-700">
                Sladový šrot se smíchá s vodou a postupně zahřívá, aby se
                uvolnily důležité látky.
              </p>
            </div>

            {/* Krok 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Scezování a chmelovar</h3>
              <p className="text-gray-700">
                Scezená sladina se vaří s chmelem, který pivu dodává typickou
                hořkost a aroma.
              </p>
            </div>

            {/* Krok 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Kvašení</h3>
              <p className="text-gray-700">
                Mladina kvasí v kádích, kde pivovarské kvasinky přeměňují cukry
                na alkohol a CO2.
              </p>
            </div>

            {/* Krok 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                5
              </div>
              <h3 className="font-bold text-lg mb-2">Zrání a stáčení</h3>
              <p className="text-gray-700">
                Pivo zraje v ležáckých tancích a poté je stáčeno do lahví,
                plechovek nebo sudů.
              </p>
            </div>
          </motion.section>

          {/* Ocenění */}
          <motion.section
            variants={itemVariants}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 relative inline-block">
              Naše ocenění
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-700"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="bg-red-700 p-3 rounded-full text-white mr-4 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Zlatá pivní pečeť 2023
                  </h3>
                  <p className="text-gray-700">
                    1. místo v kategorii polotmavý ležák za naše pivo Hradecký
                    Jantarák
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-700 p-3 rounded-full text-white mr-4 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    European Beer Star 2022
                  </h3>
                  <p className="text-gray-700">
                    Stříbrná medaile v kategorii Bohemian-Style Pilsner
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-700 p-3 rounded-full text-white mr-4 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    World Beer Awards 2021
                  </h3>
                  <p className="text-gray-700">
                    Nejlepší české pivo v kategorii IPA za náš Pivovárský Řezák
                    IPA
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            variants={itemVariants}
            className="bg-black text-white p-8 md:p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ochutnejte kvalitu našeho piva
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Navštivte náš pivovar, poznejte příběh našeho piva a ochutnejte
              jedinečné chutě, které nabízíme. Nebo navštivte některou z
              restaurací, kde čepujeme naše piva.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rezervovat prohlídku
              </motion.button>
              <motion.button
                className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kde nás najdete
              </motion.button>
            </div>
          </motion.section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
