'use client';
import React from 'react';

const girlProducts = [
  {
    name: 'Barbie Vanity Mirror with Cosmetics',
    price: 75,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/barbie-rainbow-sparkle-best-fashion-friend-2.jpg',
  },
  {
    name: 'Barbie 3 Decks round cosmetic case',
    price: 85,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/tt-5510l-barbie-3-decks-round-cosmetic-case-1616761318.jpg',
  },
  {
    name: 'Barbie Big Cosmetic Case in a box',
    price: 85,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/image.jpg',
  },
  {
    name: 'Barbie Handbag Set',
    price: 65,
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/Barbie-Hand-Mirror-with-Cosmetics-in-a-Box.jpg',
  },
];

export default function GirlsProductCarousel() {
  return (
    <section className="p-4 sm:p-8">
      <h2 className="text-3xl font-extrabold text-orange-500 mb-6">For Girls</h2>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {girlProducts.map((product, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-white shadow hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
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
