import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  return (
    <header className="bg-black text-yellow-400 p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold" onClick={() => setCurrentPage('home')}>GermanPoint</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" onClick={() => setCurrentPage('home')} className="hover:text-red-600">Home</a></li>
            <li><a href="#" onClick={() => setCurrentPage('menu')} className="hover:text-red-600">Menu</a></li>
            <li><a href="#" onClick={() => setCurrentPage('contact')} className="hover:text-red-600">Contact</a></li>
            <li><a href="#" onClick={() => setCurrentPage('services')} className="hover:text-red-600">Services</a></li>
            <li><a href="#" onClick={() => setCurrentPage('reservations')} className="hover:text-red-600">Reservations</a></li>
            <li><a href="#" onClick={() => setCurrentPage('about')} className="hover:text-red-600">About Us</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <Menu size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;