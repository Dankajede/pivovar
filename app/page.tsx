"use client";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Footer from "./components/footer";
import Currentbeers from "./components/currentbeers";
import Ad1 from "./components/ad1";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Currentbeers />
      <Ad1 />
      <Footer />
    </main>
  );
}
