// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Side - Brand Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-4xl font-bold">
              notME.exe
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Blockchain-Powered Logistics
            </p>
          </div>
          
          {/* Right Side - Links and Formalities */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            
            {/* Links */}
            <div className="flex space-x-6">
              <a 
                href="/privacy" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a 
                href="/contact" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contact
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
