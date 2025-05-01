'use client';
import React from 'react';

const littleTikesProducts = [
  {
    name: "Little Tikes-Pack 'n Go Trike",
    price: 449,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/Little-Tikes-Pack-n-Go-Trike.jpg',
  },
  {
    name: 'Little Tikes-3-in-1 Sports Zone',
    price: 359,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/71dn8RA8tXL._SL1500_.jpg',
  },
  {
    name: 'Little Tikes - Car Carrier-Red/Black',
    price: 279,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/little_tikes_-_car_carrier_red_black_single-toysuae-2.jpg',
  },
  {
    name: 'Little Tikes-Tool Set',
    price: 99,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/416rg6-b3L-1.jpg',
  },
];

export default function LittleTikesCarousel() {
  return (
    <section className="p-4 sm:p-8">
      <h2 className="text-3xl font-extrabold text-orange-500 mb-6">Little Tikes</h2>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {littleTikesProducts.map((product, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-white shadow hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain p-4"
            />
            <div className="px-4 pb-4">
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>
              <p className="text-orange-600 font-bold mb-3">QAR {product.price}.00</p>
              <button className="w-full bg-blue-100 text-blue-600 font-semibold py-2 rounded-full hover:bg-blue-200 transition flex items-center justify-center gap-2">
                Add to Cart <span role="img" aria-label="cart">🛒</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
