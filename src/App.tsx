import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Services from './components/Services';
import Reservations from './components/Reservations';
import About from './components/About';

const backgrounds = [
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1577906096429-f73c2c312435?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'menu': return <Menu />;
      case 'contact': return <Contact />;
      case 'services': return <Services />;
      case 'reservations': return <Reservations />;
      case 'about': return <About />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div 
        className="fixed inset-0 z-0 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      ></div>
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-grow z-10 overflow-auto">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;