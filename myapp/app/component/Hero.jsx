"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Hero() {
  const router = useRouter();
  const [vin, setVin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vin.length >= 5) {
      router.push(`/vin/${vin}`);
    }
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Get Your Vehicle History Report
      </h1>
      <p className="mb-8 text-lg">Enter your VIN or license plate to get started</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="text"
          placeholder="Enter VIN..."
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          className="p-3 rounded-md w-full text-black"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
        >
          Search
        </button>
      </form>
    </section>
  );
}
