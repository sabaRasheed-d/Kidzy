"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Girl Toys", href: "/girl-toys" },
    { label: "Boys Toys", href: "/boys-toys" },
    { label: "Play Sets", href: "/play-sets" },
    { label: "Dolls & Heroes", href: "/dolls-heroes" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Pre-school & Infants", href: "/preschool-infants" },
    { label: "Slime & Clay", href: "/slime-clay" },
  ];


  return (
    <header className="w-full relative">
      <div className="bg-cyan-500 text-white text-center py-2 text-xs sm:text-sm font-semibold">
        Download our App and save 50% on all items for your first order!
      </div>
      <div className="flex flex-wrap items-center justify-between p-4 shadow-md">
        <div className="flex items-center space-x-2">
          <img
            src="https://kidzy-web.vercel.app/assets/images/logo.png"
            alt="Kidzy Logo"
            className="h-8 sm:h-10 w-auto"
          />
        </div>
        <div className="w-full sm:flex-1 sm:mx-6 mt-3 sm:mt-0">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="hidden sm:flex items-center space-x-3 mt-3 sm:mt-0">
          <div className="flex border rounded-full overflow-hidden text-sm">
            <button
              className={`px-3 py-1 ${language === "en" ? "bg-orange-500 text-white" : "text-black"
                }`}
              onClick={() => setLanguage("en")}
            >
              English
            </button>
            <button
              className={`px-3 py-1 ${language === "ar" ? "bg-orange-500 text-white" : "text-black"
                }`}
              onClick={() => setLanguage("ar")}
            >
              العربية
            </button>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Login
          </button>
          <button className="flex items-center border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm">
            <span>Cart</span>
            <svg
              className="ml-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h14l1-5H8.4M7 13l-1.293 1.293A1 1 0 006 15v0a1 1 0 001 1h13a1 1 0 001-1v-1.5m-10 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </button>
        </div>
        <div className="sm:hidden mt-3 sm:mt-0">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <nav className="bg-gray-100 hidden sm:block">
        <ul className="container mx-auto max-w-screen-xl px-4 py-3 flex flex-nowrap overflow-x-auto space-x-9 text-gray-700 text-sm sm:text-base font-medium snap-x">
          {navItems.map(({ label, href }) => (
            <li key={label} className="snap-start shrink-0">
              <Link href={href} className="hover:underline cursor-pointer">
                {label}
              </Link>
            </li>
          ))}

        </ul>
      </nav>
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-40 transition-transform duration-300 transform translate-x-0 px-4 py-6 space-y-4">
            <button
              className="absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex border rounded-full overflow-hidden text-sm w-max mx-auto mt-8">
              <button
                className={`px-3 py-1 ${language === "en"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black"
                  }`}
                onClick={() => setLanguage("en")}
              >
                English
              </button>
              <button
                className={`px-3 py-1 ${language === "ar"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black"
                  }`}
                onClick={() => setLanguage("ar")}
              >
                العربية
              </button>
            </div>
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
              Login
            </button>
            <button className="w-full flex justify-center items-center border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm shadow">
              Cart
            </button>
            <div className="border-t pt-4 space-y-3 text-sm font-medium text-gray-700">
              {navItems.map(({ label, href }) => (
                <Link key={label} href={href} onClick={() => setMenuOpen(false)}>
                  <div className="hover:underline cursor-pointer px-2">{label}</div>
                </Link>
              ))}

            </div>
          </div>
        </>
      )}
    </header>
  );
}
