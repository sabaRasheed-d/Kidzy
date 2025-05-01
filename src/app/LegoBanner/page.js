"use client"

import Image from "next/image";
import Link from "next/link";

export default function LegoBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <Image
        src="https://cdn2.steamgriddb.com/hero/660698e3c17b019e73778f87ba483355.png"
        alt="Lego Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
        <div className="px-6 md:px-16 text-white max-w-[600px]">
          <div className="flex items-center mb-6">
            <Image
              src="https://kidzy-web.vercel.app/assets/images/lego-logo.png"
              alt="LEGO"
              width={60}
              height={60}
              className="mr-4"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            All new legos <br /> now available <br /> at Kidzy
          </h1>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="/buy"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Buy Now →
            </Link>
            <Link
              href="/brands"
              className="bg-white/10 border border-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition"
            >
              Explore all brands
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
