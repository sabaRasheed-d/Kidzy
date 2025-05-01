"use client";
import { useState } from "react";

const girlToys = [
    {
      name: "L.O.L. Surprise OMG Movie Doll- Style 1 ",
      image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/145.jpeg",
      description: "AUNBOX 25 SURPRISES including LOL Surprise Movie Magic OMG fashion.",
      price: "QAR 279.00",
    },
    {
      name: "CLEMENTONI CRAZY STYLISH WATCH",
      image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/91IqRc3FElL._AC_SL1500_.jpg",
      description: "Simply choose the coloured modules to attach or a strap and insert.",
      price: "QAR 109.00",
    },
    {
      name: "HAYATI BABY MY 1ST BORN AMOURA",
      image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/8c5dfbda-5277-4116-95ca-cb4d67b3054a_62f824a185284cb5ba5cb0b3d9262d3d.jpg",
      description: "16-inch Baby doll with removable outfit,comes with a plush.",
      price: "QAR 89.00",
    },
    {
      name: "L.O.L. Surprise Hair Hair Hair Dolls Asst in PDQ",
      image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/ruda-miniaturka.jpg",
      description: "The new Hair Hair Hair Tots series is a whole new and fantastic.",
      price: "QAR 99.00",
    },
    {
      name: "Frozen 2 Magic Ice Sleeve",
      image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/D_NQ_NP_605567-MLM46042399212_052021-O.jpg",
      description: "Disney Frozen II Magic Ice Sleeve lets you be just like Queen Elsa and magically shoot .",
      price: "QAR 179.00",
    },
    {
      name: "Barbie Glamping Play Set",
      image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/81livjpukol._ac_sl1500_-1.jpg",
      description: "Enjoy creating a Barbie themed BBQ featuring cups, saucers, skewers and even a chair for Barbie.",
      price: "QAR 99.00",
    },
  ];
  

export default function GirlToysPage() {
  const [sortBy, setSortBy] = useState("Most Relevant");

  return (
    <div>
      <div
        className="h-40 sm:h-60 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/8f/1f/7d/8f1f7d22dbf2406159bc947c15b10144.jpg')",
        }}
      >
        <h1 className="text-white text-3xl sm:text-5xl font-bold bg-opacity-800 px-6 py-2 rounded">
          Girl Toys
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-500 mb-2 sm:mb-0">
          <span className="text-blue-600 cursor-pointer hover:underline">
            Home
          </span>{" "}
          &gt; Girl Toys
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
  {girlToys.map((toy, index) => (
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
