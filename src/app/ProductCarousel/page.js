'use client';
import React from 'react';

const products = [
  {
    name: 'Hot Wheels Bicycle Spartan 12',
    price: 429,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/paw-patrol-movie-marshalls-transforming-fire-truck-alt-1.jpeg', 
  },
  {
    name: 'X-Shot Double Flux Dart Blaster Combo',
    price: 299,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/71-dwgu0qkL._AC_SL1024_.jpg',
  },
  {
    name: 'L.O.L. Surprise OMG Queens - 20 Surprises',
    price: 229,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/50-2.jpg',
  },
  {
    name: 'BABY born Doll',
    price: 349,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/3f0827c4-4510-497c-a251-ffb34f6d04c7.jpg',
  },
];

export default function ProductCarousel() {
  return (
    <section className="p-4 sm:p-8">
      <h2 className="text-3xl font-bold text-orange-500 mb-4">For Boys</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-2xl border shadow-md hover:shadow-lg transition duration-300 bg-white p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-center text-sm font-semibold">{product.name}</h3>
            <p className="text-orange-600 font-bold mt-2 mb-4">QAR {product.price}.00</p>
            <button className="bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-blue-200 flex items-center gap-2">
              Add to Cart
              <span role="img" aria-label="cart">🛒</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
