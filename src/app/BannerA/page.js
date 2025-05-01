"use client"

import Image from "next/image";
import Link from "next/link";

export default function BannerA() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <Image
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSkI28-G6gXxsKrMT5Ln-wn5re1chcp-4iR4T9p7NwStixu1_j4" // Replace with your actual image
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
            Get your <br /> favourite super <br /> heroes today!

          </h1>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="/buy"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Buy Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
