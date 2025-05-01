'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a2532] text-white">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src="https://kidzy-web.vercel.app/assets/images/footer-logo.png" alt="Kidzy Logo" className="h-10" />
          <img src="https://kidzy-web.vercel.app/assets/images/gplay.png" alt="Google Play" className="h-10" />
          <img src="https://kidzy-web.vercel.app/assets/images/app-store.png" alt="App Store" className="h-10" />
          <img src="https://kidzy-web.vercel.app/assets/images/theqa.png" alt="Theqa Certified" className="h-12" />
        </div>
        <div>
          <h4 className="font-bold mb-3">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm">
            <li>About Kidzy</li>
            <li>Login</li>
            <li>Sign up</li>
            <li>My Account</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">MENU</h4>
          <ul className="space-y-2 text-sm">
            <li>Girl Toys</li>
            <li>Boys Toys</li>
            <li>Play Sets</li>
            <li>Dolls & Heroes</li>
            <li>New Arrivals</li>
            <li>Pre-school & Infants</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">BRANDS</h4>
          <ul className="space-y-2 text-sm">
            <li>Barbie</li>
            <li>Disney</li>
            <li>LOL</li>
            <li>Little Tikes</li>
            <li>Zuru</li>
            <li>View All</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-6 px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; 2023 Kidzy. All rights reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
        </div>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <span>Follow Us:</span>
          <FaFacebookF className="hover:text-gray-300" />
          <FaInstagram className="hover:text-gray-300" />
        </div>
      </div>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition transform"
      >
        <div className="relative">
          <FaWhatsapp size={24} className="text-white" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            1
          </span>
        </div>
      </a>
    </footer>
  );
}
