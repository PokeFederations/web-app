import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <Link style={{ textDecoration: 'none', color: 'blue' }} to="/pokemon/all">View all Pokemons</Link>
    </div>
  );
};

export default Menu;