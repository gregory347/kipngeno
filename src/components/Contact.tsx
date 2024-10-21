import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-red-600">Get in Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Phone className="mr-2" />
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-2" />
              <span>info@germanpoint.com</span>
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2" />
              <span>123 German Street, Cityville, State 12345</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-red-600">Send us a Message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 bg-gray-800 rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 bg-gray-800 rounded" />
            <textarea placeholder="Message" rows={4} className="w-full p-2 bg-gray-800 rounded"></textarea>
            <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;