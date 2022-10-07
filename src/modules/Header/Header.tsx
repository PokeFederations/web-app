import React from 'react';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import Menu from './components/Menu';

const Header = () => {
  return (
    <div style={{ display: 'flex', padding: '16px 100px 0', justifyContent: 'space-between', alignItems: 'center', height: '80px', borderBottom: '1px solid gray', marginBottom: '20px' }}>
     <Logo />
     <SearchBar />
     <Menu />
    </div>
  );
};

export default Header;