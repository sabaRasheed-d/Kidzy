'use client';
import React from 'react';

const brands = [
  { name: 'Barbie', img: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/brands/April2024/Barbie.png' },
  { name: 'LOL Surprise', img: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/brands/April2024/LOL.png' },
  { name: 'Zuru', img: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/brands/April2024/Zuru.png' },
  { name: 'Frozen', img: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/brands/April2024/Frozen.png' },
  { name: 'Nenuco', img: 'https://jugueterialeo.com/cdn/shop/products/BOUTIQUE2-removebg-preview_1400x.png?v=1680049756' },
  { name: 'Disney', img: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/brands/April2024/Disney.png' },
  { name: 'Little Tikes', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoBkbCYpbfASI5vW-IS6-UhxWr9g3aQJkyw&s' },
  { name: 'XShot', img: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/brands/April2024/X-Shot.png' },
  { name: 'BanBao', img: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/brands/April2024/BanBao.png' },
  { name: 'Fortnite', img: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/brands/April2024/Fortnite.png' },
];

export default function BrandGrid() {
  return (
    <section className="py-12 px-4 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Top Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-4 shadow hover:shadow-xl transition duration-300 ease-in-out w-50 h-28 flex items-center justify-center hover:scale-105 cursor-pointer"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="max-h-20 max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
