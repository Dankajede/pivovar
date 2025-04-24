"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaBeer,
} from "react-icons/fa";
import Fly from "../components/fly";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
    }
  };

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
            KONTAKTUJTE NÁS
          </h1>
          <Fly />
          <div className="w-20 h-1 bg-red-700 mb-4"></div>
          <p className="text-lg text-center max-w-2xl">
            Rádi vám odpovíme na všechny otázky o našem pivovaru a produktech
          </p>
        </div>
      </div>

      {/* Hlavní obsah */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Levá strana - kontaktní informace */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Kontaktní údaje
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-700"></span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-700 p-3 rounded-lg text-white mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Adresa
                    </h3>
                    <p className="text-gray-700">
                      Údolní 212/1, 147 00, Praha 4 - Braník
                    </p>
                    <p className="text-gray-700">
                      (areál bývalého pivovaru Braník)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-700 p-3 rounded-lg text-white mr-4">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Telefon
                    </h3>
                    <p className="text-gray-700">+420 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-700 p-3 rounded-lg text-white mr-4">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      E-mail
                    </h3>
                    <p className="text-gray-700">info@vaspivovar.cz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-700 p-3 rounded-lg text-white mr-4">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Otevírací doba
                    </h3>
                    <p className="text-gray-700">
                      Pondělí - Pátek: 10:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaBeer className="text-red-700 mr-3" size={24} />
                <h3 className="text-xl font-bold">
                  Navštivte naši pivovarskou prodejnu
                </h3>
              </div>
              <p className="mb-4">
                Přijďte ochutnat naše pivo přímo u zdroje! Nabízíme prohlídky
                pivovaru s ochutnávkou a možností zakoupení našich produktů
                přímo na místě.
              </p>
              <motion.button
                className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Aktuální nabídka piva
              </motion.button>
            </div>
          </motion.div>

          {/* Pravá strana - kontaktní formulář */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Napište nám
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-700"></span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Jméno
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
                    placeholder="Vaše jméno"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
                    placeholder="vas@email.cz"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
                    placeholder="Napište nám svůj dotaz..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-lg font-medium transition-all"
                  whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                  whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {status === "idle" && "Odeslat zprávu"}
                  {status === "sending" && "Odesílám..."}
                  {status === "success" && "Děkujeme za zprávu!"}
                  {status === "error" && "Chyba, zkuste znovu"}
                </motion.button>

                {status === "success" && (
                  <motion.div
                    className="bg-green-100 text-green-800 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Vaše zpráva byla úspěšně odeslána. Brzy se vám ozveme.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    className="bg-red-100 text-red-800 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Při odesílání zprávy došlo k chybě. Zkuste to prosím znovu.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Mapa - přidáno jako návrh */}
        <motion.div
          className="mt-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 relative inline-block">
            Kde nás najdete
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-700"></span>
          </h2>

          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            {/* Zde by byla implementace mapy, např. pomocí Google Maps nebo Mapbox */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">Mapa bude zobrazena zde</p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
