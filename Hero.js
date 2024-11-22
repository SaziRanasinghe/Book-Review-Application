import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center py-24">
          <h1 className="text-4xl font-extrabold text-center sm:text-5xl lg:text-6xl">
            Welcome to Book Reviews Portal!
          </h1>
          <p className="mt-6 text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Discover and share your favorite books with the community. Read reviews, write your own, and connect with book lovers around the world.
          </p>

          <div className="mt-12 flex justify-center space-x-6">
            <Link
              to="/login"
              className="inline-block py-3 px-6 rounded-md text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-block py-3 px-6 rounded-md text-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-96 bg-cover bg-center mt-16" 
        style={{
          backgroundImage: 'url( https://www.innerdrive.co.uk/wp-content/uploads/2024/01/Benefits-of-Reading.jpg)'
        }} 
      />
    </div>
  );
};

export default Hero;
