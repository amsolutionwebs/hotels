import React from 'react';

import { Phone } from 'lucide-react';

interface RoomCardProps {
  title: string;
  price: string;
  image: string;
  features: string[];
}

const RoomCard: React.FC<RoomCardProps> = ({ title, price, image, features }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48 sm:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          <span className="text-lg sm:text-xl text-gray-600 mt-2 sm:mt-0">{price}/night</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-600 text-sm sm:text-base">
           
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
       Call Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;