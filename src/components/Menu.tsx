import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "BREAKFAST",
    items: [
      { name: "Bacon, Eggs, Sausages, Beans & Toast", price: "900Ksh" }
    ]
  },
  {
    name: "CHICKEN",
    items: [
      { name: "Grilled Chicken", price: "950 ksh" },
      { name: "Stir-fry chicken", price: "950 ksh" },
      { name: "Quarter Chicken", price: "650 Ksh" },
      { name: "Half Chicken", price: "950 Ksh" },
      { name: "Escalope/Schnitzel (Chicken Breast)", price: "1,200 Ksh" },
      { name: "Chicken Burger with Cheese", description: "(garnished with sautéed onions and tomato)", price: "850 Ksh" }
    ]
  },
  {
    name: "GERMAN SAUSAGES",
    items: [
      { name: "Bockwurst, Bratwurst, Bavarian Weisswurst", price: "1,200 Ksh each" },
      { name: "Cheese Krainer, Garlic (All 200 g)", price: "1,200 Ksh each" },
      { name: "Boerwors (500 g)", price: "1,350 Ksh" },
      { name: "Mixed Grill Sausage", price: "1,700 Ksh" },
      { name: "Currywurst", price: "1,350 Ksh" }
    ]
  },
  {
    name: "SOUPS",
    items: [
      { name: "Tomato", price: "600 Ksh" },
      { name: "Beef Goulash", description: "served with baguette slices", price: "600 Ksh" }
    ]
  },
  // Add more categories here...
];

const Menu: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Menu</h2>
      {menuData.map((category) => (
        <div key={category.name} className="mb-6">
          <button 
            onClick={() => toggleCategory(category.name)}
            className="flex justify-between items-center w-full text-left text-xl font-semibold mb-2 text-red-600 hover:text-red-700"
          >
            <span>{"<<< "}{category.name}{" >>>"}</span>
            {openCategories.includes(category.name) ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openCategories.includes(category.name) && (
            <div className="pl-4">
              {category.items.map((item, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-yellow-400">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-300">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;