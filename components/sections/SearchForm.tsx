"use client";

import { useState } from "react";

export default function SearchForm() {
  const [whatValue, setWhatValue] = useState("");
  const [whereValue, setWhereValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission
    console.log("Search:", { what: whatValue, where: whereValue });
  };

  return (
    <section className="frontpagecover-section bg-gs-yellow py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="gc-float-searchbox">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-gs-black">
            Dienstleister schneller finden
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-3 md:gap-4">
              {/* Was Input */}
              <div className="relative">
                <input
                  type="search"
                  id="what_search"
                  name="WAS"
                  placeholder="Was"
                  value={whatValue}
                  onChange={(e) => setWhatValue(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gs-yellow focus:border-transparent"
                  aria-label="Was"
                  autoFocus
                />
              </div>

              {/* Wo Input */}
              <div className="relative">
                <input
                  type="search"
                  id="where_search"
                  name="WO"
                  placeholder="Wo"
                  value={whereValue}
                  onChange={(e) => setWhereValue(e.target.value)}
                  autoComplete="address-level2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gs-yellow focus:border-transparent"
                  aria-label="Wo"
                />
                {/* Geolocation option */}
                <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-md rounded-md hidden hover:block">
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    📍 Meinen Standort verwenden
                  </button>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="bg-gs-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium whitespace-nowrap"
                aria-label="Suche"
              >
                Finden
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
