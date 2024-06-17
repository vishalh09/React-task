import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/">TV Shows</Link>
        </h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
