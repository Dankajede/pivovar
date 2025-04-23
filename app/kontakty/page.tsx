"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

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

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      <motion.section
        className="flex flex-col items-center justify-center py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <div className="max-w-md w-full bg-white bg-opacity-80 backdrop-blur-md rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Kontaktujte mě
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Jméno
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Zpráva
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition"
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {status === "idle" && "Odeslat zprávu"}
              {status === "sending" && "Odesílám..."}
              {status === "success" && "Děkuji!"}
              {status === "error" && "Chyba, zkuste znovu"}
            </motion.button>
          </form>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
