import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Grand Hotel</h3>
            <p className="text-gray-400">
            In the heart of Puri, Odisha, lies the elegant and tranquil Victoria Hotel Official. Our establishment ensures that guests have an unforgettable stay by offering a distinctive fusion of contemporary comfort and seaside elegance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#rooms" className="text-gray-400 hover:text-white">Rooms</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Room Service</li>
              <li className="text-gray-400">Free Wifi</li>
              <li className="text-gray-400">Restaurant</li>
              <li className="text-gray-400">Conference Rooms</li>
            </ul>
          </div>

          
        </div>
        {/* <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
        </div> */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Grand Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;