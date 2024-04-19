import React from 'react';
import '../styles/header.css';
import logo from '../../assets/logo.webp';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='Logo' height={100} />
      </div>
    </header>
  );
};

export default Header;
