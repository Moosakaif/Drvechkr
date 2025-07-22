"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HIW";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Footer />
    </main>
  );
}