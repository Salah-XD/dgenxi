import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" bg-white">
      {/* Navigation */}
      <nav className="px-4 py-4 md:px-8 lg:px-16 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-800">
              dgenxi
            </h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-purple-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">About Us</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Let's talk</a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-purple-700 transition-colors">
              <span>Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            >
              <span 
                className={`block w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out
                  ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out
                  ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out
                  ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-gray-600 hover:text-purple-600 py-2 px-4 hover:bg-purple-50 rounded-lg transition-colors">
              Home
            </a>
            <a href="#" className="block text-gray-600 hover:text-purple-600 py-2 px-4 hover:bg-purple-50 rounded-lg transition-colors">
              About Us
            </a>
            <a href="#" className="block text-gray-600 hover:text-purple-600 py-2 px-4 hover:bg-purple-50 rounded-lg transition-colors">
              Let's talk
            </a>
          </div>
        </div>
      </nav>

      

      {/* Chat Button
      <div className="fixed bottom-6 right-6">
        <button className="bg-purple-900 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition-colors">
          <Bot className="w-6 h-6" />
        </button>
      </div> */}
    </div>
  );
}

export default Nav;