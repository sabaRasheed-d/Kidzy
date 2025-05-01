"use client";
import { useState } from "react";

const DollsHeroesToys = [
  {
    name: "Fortnite Solo Mode 4 Inches Figure Dark Bomber Toy Series",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/54-2.jpg",
    description: "Fortnite figure - Dark Bomber (FNT0072) The Fortnite is one.",
    price: "QAR 69.00",
  },
  {
    name: "FORTNITE SOLO MODE SKULL TROOPER TOY FIGURE",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/63-1.jpg",
    description: "FORTNITE SOLO MODE SKULL TROOPER TOY FIGURE AGE:+8.",
    price: "QAR 69.00",
  },
  {
    name: "Nenuco Doll My Travel Companion",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/31-1.jpeg",
    description: "This briefcase Nenuco makes it possible to play with Nenuco anywhere because you can take it with you wherever.",
    price: "QAR 269.00",
  },
  {
    name: "Barbie Deluxe Career Doll Asst.",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/barbie-docteur-carriere-deluxe.jpeg",
    description: "When children play Barbie, they imagine everything they can and want to be! With Mattel's Barbie.",
    price: "QAR 135.00",
  },
  {
    name: "Little Tikes Lilly Tikes Sand &amp; Sun Tommy",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/71dGAy9-3jL._AC_SL1500_.jpg",
    description: "Tommy comes with a sand bucket, shovel, turtle sand mold and moldable sand.",
    price: "QAR 149.00",
  },
  {
    name: "Fanco Pop Elsa Riding Nokk",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/img_175820_2edc27b523f765b34ee3f6c9141f84e6_20.jpg",
    description: "Would you like to have your favorite character with a different look?Funko Pop has been able to attract all tastes with its unique design and unparalleled variety in.",
    price: "QAR 165.00",
  },
];


export default function DollsHeroesPage() {
  const [sortBy, setSortBy] = useState("Most Relevant");

  return (
    <div>
      <div
        className="h-40 sm:h-60 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/056/527/669/small_2x/collection-of-various-sports-balls-on-a-blue-background-showcasing-diverse-textures-and-colors-free-photo.jpeg')",
        }}
      >
        <h1 className="text-white text-3xl sm:text-5xl font-bold bg-opacity-800 px-6 py-2 rounded">
          Dolls & Heroes
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-500 mb-2 sm:mb-0">
          <span className="text-blue-600 cursor-pointer hover:underline">
            Home
          </span>{" "}
          &gt; Dolls & Heroes
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
          {DollsHeroesToys.map((toy, index) => (
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
