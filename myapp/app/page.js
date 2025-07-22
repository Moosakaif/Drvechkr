"use client";

import Hero from "./component/Hero";
import HowItWorks from "./component/HIW";
import Footer from "./component/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Hero />
      <HowItWorks />
      <Footer />
    </main>
  );
}