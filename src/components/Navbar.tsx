
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">9Б Класс</Link>
        
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-blue-200 transition-colors">
            Главная
          </Link>
          <Link to="/students" className="text-white hover:text-blue-200 transition-colors">
            Ученики
          </Link>
          <Link to="/achievements" className="text-white hover:text-blue-200 transition-colors">
            Достижения
          </Link>
          <Link to="/events" className="text-white hover:text-blue-200 transition-colors">
            Мероприятия
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
