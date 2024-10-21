import React from 'react';
import DishCarousel from './DishCarousel';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <DishCarousel />
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">Welcome to GermanPoint</h2>
      <p className="mb-4">Experience authentic German cuisine in the heart of the city.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-red-600">Our Specialties</h3>
          <ul className="list-disc list-inside">
            <li>Authentic Schnitzel</li>
            <li>Bavarian Pretzels</li>
            <li>Black Forest Cake</li>
            <li>German Beer Selection</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 text-red-600">Opening Hours</h3>
          <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Home;