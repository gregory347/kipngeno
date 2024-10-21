import React from 'react';

const dishes = [
  { name: 'Schnitzel', image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Bratwurst', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Sauerkraut', image: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
];

const DishCarousel: React.FC = () => {
  return (
    <div className="mb-8 overflow-x-auto whitespace-nowrap">
      {dishes.map((dish, index) => (
        <div key={index} className="inline-block mr-4 last:mr-0">
          <img src={dish.image} alt={dish.name} className="w-64 h-64 object-cover rounded-lg" />
          <p className="text-center mt-2">{dish.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DishCarousel;