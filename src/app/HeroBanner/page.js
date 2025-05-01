"use client";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('https://kidzy-web.vercel.app/assets/images/slide-1.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-xl text-white space-y-5">
          <Image
            src="https://kidzy-web.vercel.app/assets/images/zuru1.png" // Save logo in /public/banner/
            alt="Hot Wheels"
            width={140}
            height={40}
          />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Race to win with <br />
            all new vintage car set
          </h1>
          <p className="text-sm sm:text-base text-gray-300">
            When kids play with Hot Wheels, every attempt teaches them to take
            on challenges, develop problem-solving skills, and cultivate a
            growth mindset.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold px-6 py-3 rounded-full text-sm shadow-lg hover:brightness-110 transition">
            Buy Now →
          </button>
        </div>
      </div>
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white">
        <button className="bg-black/50 p-2 rounded-full hover:bg-black/70">
          &#8592;
        </button>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        <span className="w-3 h-3 bg-white rounded-full opacity-60" />
        <span className="w-3 h-3 bg-white rounded-full" />
        <span className="w-3 h-3 bg-white rounded-full opacity-60" />
      </div>
    </section>
  );
}
