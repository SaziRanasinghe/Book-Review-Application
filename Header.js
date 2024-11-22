import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-950 text-white py-4 px-8 flex justify-between items-center">
      <a href="/" className="text-2xl font-bold">BestBook</a>
      <nav>
        {/* Hamburger and Close icon */}
        <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-white focus:outline-none">
            {isMenuOpen ? (
              // Close icon when menu open
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when menu closed
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu items when menu is open on mobile */}
        <ul className={`flex flex-col lg:flex lg:space-x-6 space-y-4 lg:space-y-0 lg:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li><a href="/review-list" className="hover:underline">Reviews List</a></li>
          <li><a href="/add-review" className="hover:underline">Add Review</a></li>
          <li><a href="#about" className="hover:underline">About Us</a></li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
