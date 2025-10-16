// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'transparent',
      backdropFilter: 'blur(10px)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000
    }}>
      {/* Logo */}
      <div style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold',
        color: '#999'
      }}>
        notMe.exe
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '3.5rem' }}>
        <a href="#home" style={{ 
          color: '#999', 
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          Home
        </a>
        <a href="#about" style={{ 
          color: '#999', 
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          About
        </a>
        <a href="#services" style={{ 
          color: '#999', 
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          Services
        </a>
        <a href="#contact" style={{ 
          color: '#999', 
          textDecoration: 'none',
          fontWeight: '500'
        }}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
