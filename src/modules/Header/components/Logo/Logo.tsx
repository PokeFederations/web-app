import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import PokeFederationsLogo from './assets/PokeFederationsLogo.png';

const Logo = () => {
  return (
    <Link to="/">
      <img style={{ width: '300px', alignSelf: 'center' }} src={PokeFederationsLogo} alt="PokeFederations" />
    </Link>
  );
};

export default Logo;