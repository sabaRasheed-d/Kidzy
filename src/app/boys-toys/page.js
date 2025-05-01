"use client";
import { useState } from "react";

const BoyToys = [
  {
    name: "X-Shot Double Flux Dart Blaster Combo Pack",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/36524-X-SHOT-SKINS-MIX-Combo-Pack-LAST-STAND-And-2PK-FLUX-48-Darts-Window-Box-02.jpg",
    description: "The Last Stand has a 14-dart capacity auto-rotating barrel and easy-to-prime mechanism.",
    price: "QAR 299.00",
  },
  {
    name: "RAZOR POWERWING LIGHTSHOW",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/2203130_101@3x.jpg",
    description: "Multi-Color LED LightShow—More than 30 integrated multi-color LED lights dance.",
    price: "QAR 499.00",
  },
  {
    name: "Marvel RC Spiderman Buggy",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/000000.jpg",
    description: "Get ready for high-speed adventures at up to 12 km per hour with the Spider-Man vehicle remotely controlled by you.",
    price: "QAR 499.00",
  },
  {
    name: "Little Tikes Go &amp; Grow Dino Ride-On",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/81fc51F63uL._AC_SX679_.jpg",
    description: "Now kids can ride their own dino trike with the Little Tikes DinoKids will enjoy playing indoors .",
    price: "QAR 199.00",
  },
  {
    name: "Paw Patrol Movie Marshall Transfrag Vehicle",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/paw-patrol-movie-marshalls-transforming-fire-truck-alt-1.jpeg",
    description: "Fire Truck Transformation: Paw Patrol Evidence Truck These transformations are epic.",
    price: "QAR 449.00",
  },
  {
    name: "X-Shot ExcelReflex 6 Double Pack",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/13c29036024d76c3abfff17a988bab4a3b508419_930690_01.jpg",
    description: "Rapid-fire of 6 darts in under 30 seconds using the rotating barrelThe X-Shot Excel Reflex 6 can hit targets.",
    price: "QAR 119.00",
  },
];


export default function BoyToysPage() {
  const [sortBy, setSortBy] = useState("Most Relevant");

  return (
    <div>
      <div
        className="h-40 sm:h-60 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1zQ1b1fqWStBhQzZM-pJmlHbAhf709f2FC5kKTOg7btlSue8R')",
        }}
      >
        <h1 className="text-white text-3xl sm:text-5xl font-bold bg-opacity-800 px-6 py-2 rounded">
          Boy Toys
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-500 mb-2 sm:mb-0">
          <span className="text-blue-600 cursor-pointer hover:underline">
            Home
          </span>{" "}
          &gt; Boy Toys
        </div>
        <div>
          <label className="mr-2 text-sm font-medium">Sort by</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-3 py-1 rounded-md text-sm"
          >
            <option>Most Relevant</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <button className="mb-4 bg-cyan-100 text-cyan-900 px-4 py-2 rounded-full flex items-center justify-center gap-2 text-sm font-semibold">
            Apply Filter
            <span className="text-lg">🧊</span>
          </button>

          <div className="space-y-2 text-2xl">
            <h3 className="font-medium">Select Age</h3>
            <div>
              <input type="checkbox" id="age0" className="mr-2" />
              <label htmlFor="age0">0+ years</label>
            </div>
            <div>
              <input type="checkbox" id="age1" className="mr-2" />
              <label htmlFor="age1">1 years</label>
            </div>
            <div>
              <input type="checkbox" id="age1" className="mr-2" />
              <label htmlFor="age1">1-3 years</label>
            </div>
            <div>
              <input type="checkbox" id="age1" className="mr-2" />
              <label htmlFor="age1">1-5 years</label>
            </div>
            <div>
              <input type="checkbox" id="age1" className="mr-2" />
              <label htmlFor="age1">1.5 years</label>
            </div>
            <div>
              <input type="checkbox" id="age1" className="mr-2" />
              <label htmlFor="age1">1+ years</label>
            </div>
            <div>
              <input type="checkbox" id="age1" className="mr-2" />
              <label htmlFor="age1">10 Months + years</label>
            </div>
            <div>
              <input type="checkbox" id="age1" className="mr-2" />
              <label htmlFor="age1">10+ years</label>
            </div>
            <div>
              <input type="checkbox" id="age1" className="mr-2" />
              <label htmlFor="age1">12 Months + years</label>
            </div>
            <div>
              <input type="checkbox" id="age1" className="mr-2" />
              <label htmlFor="age1">13+ years</label>
            </div>
            <div>
              <input type="checkbox" id="age1" className="mr-2" />
              <label htmlFor="age1">14+ years</label>
            </div>
            <div>
              <input type="checkbox" id="age1" className="mr-2" />
              <label htmlFor="age1">18 years</label>
            </div>
          </div>
        </aside>
        <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BoyToys.map((toy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border shadow hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={toy.image}
                alt={toy.name}
                className="w-full h-48 object-cover p-1"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{toy.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{toy.description}</p>
                  <span className="text-pink-600 font-bold text-md p-6">{toy.price}</span>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 mt-4 rounded text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>

      </div>
    </div>
  );
}
