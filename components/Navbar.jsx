import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black shadow-sm sticky top-0">
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-4 px-5 ">
        {/* ::Site logo and Naame */}
        <a
          href="/"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <img
            className="w-12 h-12 rounded-full"
            src="/images/logo.png"
            alt="logo"
          />

          <span className="ml-3 text-xl text-black font-semibold antialiased">
            CyberChatBot
          </span>
        </a>
        {/* ::Navbar */}
        <nav className="hidden md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-500 md:flex flex-wrap items-center justify-center text-sm tracking-wide">
          <a href="#benefits" className="mr-8 hover:text-cyan ">
            BENEFÍCIOS
          </a>
          <a href="#link" className="mr-8 hover:text-cyan">
            COMO FUNCIONA
          </a>
          <a href="#plans" className="mr-8 hover:text-cyan">
            PLANOS
          </a>
          <a href="#link" className="mr-8 hover:text-cyan">
            CONTATO
          </a>
        </nav>
        {/* ::Avatar */}
        <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer"></div>
        {/* ::Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-400 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:cyan"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-cyan text-sm uppercase text-center font-semibold">
          <a
            href="#benefits"
            className="block px-3 py-2 rounded-md text-gray hover:text-white hover:bg-gray-700"
          >
            Benefícios
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray hover:text-white hover:bg-gray-700"
          >
            Como funciona
          </a>
          <a
            href="#plans"
            className="block px-3 py-2 rounded-md text-gray hover:text-white hover:bg-gray-700"
          >
            Planos
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray hover:text-white hover:bg-gray-700"
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
