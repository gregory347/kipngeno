import React from 'react';

const Footer: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-black text-yellow-400 p-4 sticky bottom-0 z-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 GermanPoint. All rights reserved.</p>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li><a href="#" onClick={() => setCurrentPage('home')} className="hover:text-red-600">Home</a></li>
            <li><a href="#" onClick={() => setCurrentPage('menu')} className="hover:text-red-600">Menu</a></li>
            <li><a href="#" onClick={() => setCurrentPage('contact')} className="hover:text-red-600">Contact</a></li>
            <li><a href="#" onClick={() => setCurrentPage('services')} className="hover:text-red-600">Services</a></li>
            <li><a href="#" onClick={() => setCurrentPage('reservations')} className="hover:text-red-600">Reservations</a></li>
            <li><a href="#" onClick={() => setCurrentPage('about')} className="hover:text-red-600">About Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;