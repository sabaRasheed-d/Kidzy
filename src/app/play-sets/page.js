"use client";
import { useState } from "react";

const PlaySetToys = [
  {
    name: "LEGO Heartlake City Park",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/20-9.jpg",
    description: "The LEGO® Friends Friendship House is the ultimate base for special moments between the friends of Heartlake City.",
    price: "QAR 199.00",
  },
  {
    name: "Barbie Glamping Play Set",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/81bcgiklhpl._ac_sl1500_.jpg",
    description: "Enjoy creating a Barbie themed BBQ featuring cups, saucers, skewers and even a chair for Barbie to sit.",
    price: "QAR 99.00",
  },
  {
    name: "Disney Princess Deluxe Belle",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/121.jpeg",
    description: "Disney Princess Belle Deluxe Styling Head comes with long brown hair and 12 fun, wear and share hair styling.",
    price: "QAR 299.00",
  },
  {
    name: "Disney Princess Cash Register Play Set",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/039897955834.jpg",
    description: "Disney Princess Cash Register Play SetAge:3+.",
    price: "QAR 289.00",
  },
  {
    name: "Little Tikes Kitchen Prep N Serve Kitchen Toy",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/81XkR012hfL._AC_SL1500_.jpg",
    description: "This ultra modern kitchen has everything little chefs want to play.",
    price: "QAR 739.00",
  },
  {
    name: "CLEM. PUZZLE HARRY POTTER 104PCS",
    image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/81EyyoFfoTL._AC_SL1500_.jpg",
    description: "104-piece Puzzle, with dimensions 48. 5 x 33. 5 cmPuzzles are designed .",
    price: "QAR 59.00",
  },
];


export default function PlaySetPage() {
  const [sortBy, setSortBy] = useState("Most Relevant");

  return (
    <div>
      <div
        className="h-40 sm:h-60 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSF0oj3ModCbVpidJKKrxRi0OOKeN-MOBB4UH72mcSm34Ouu0')",
        }}
      >
        <h1 className="text-white text-3xl sm:text-5xl font-bold bg-opacity-800 px-6 py-2 rounded">
          Play Sets
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-500 mb-2 sm:mb-0">
          <span className="text-blue-600 cursor-pointer hover:underline">
            Home
          </span>{" "}
          &gt; Play Sets
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
          {PlaySetToys.map((toy, index) => (
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
