"use client";
import Image from "next/image";

const categories = [
  { name: "Play Sets", image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/categories/April2024/playsets.png" },
  { name: "New Arrivals", image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/categories/April2024/hotdeals.png" },
  { name: "Slime & Clay", image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/categories/April2024/groupgames.png" },
  { name: "Group Games", image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/categories/April2024/groupgames.png" },
  { name: "Dolls & Heroes", image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/categories/April2024/dollsnheroes.png" },
  { name: "Pre-school & Infants", image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/categories/April2024/educationaltoys.png" },
  { name: "Bicycles & Scooters", image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/categories/April2024/bicycle.png" },
  { name: "Outdoor", image: "https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/categories/April2024/outdoor.png" },
];

export default function CategoriesSection() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6">
        Categories
      </h2>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-4 flex justify-between items-center shadow hover:shadow-lg transition duration-300"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {category.name}
              </h3>
              <span className="text-orange-500 text-xl mt-2 inline-block">
                →
              </span>
            </div>
            <div className="w-20 h-20 relative">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
