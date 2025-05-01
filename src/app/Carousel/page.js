'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaShoppingCart } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'CLEM. PUZZLE HARRY POTTER 104PCS',
    price: 'QAR 59.00',
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/0050743620812.jpg',
  },
  {
    id: 2,
    name: 'Simba Dickie Rescue Helicopter',
    price: 'QAR 139.00',
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/6666.jpg',
  },
  {
    id: 3,
    name: "LEGO POPPY'S HOT AIR BALLOON",
    price: 'QAR 189.00',
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/050743655784.jpg',
  },
  {
    id: 4,
    name: 'Nenuco Doll Set',
    price: 'QAR 159.00',
    image: 'https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/products/April2024/035051574323.jpg',
  },
];

export default function ProductCarousel() {
  return (
    <div className="w-full px-4 py-8 bg-white">
      <h2 className="text-3xl font-bold text-orange-500 mb-6">Most Selling</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain p-4"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-700 truncate">
                  {product.name}
                </h3>
                <p className="text-orange-600 font-bold mt-1">{product.price}</p>
              </div>
              <div className="p-4 pt-0">
                <button className="flex items-center justify-center w-full py-2 text-white bg-sky-500 rounded-xl hover:bg-sky-600 transition">
                  <span>Add to Cart</span>
                  <FaShoppingCart className="ml-2" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
