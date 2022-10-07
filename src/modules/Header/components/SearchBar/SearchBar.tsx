import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import Pokeball from './assets/pokeball.png';

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
            <input 
              value={searchInput} 
              onChange={({ target: { value } }) => setSearchInput(value)} 
              style={{ width: '220px', height: '30px', marginRight: '8px' }}
              placeholder="Catch Pokemon by name or id" type="text"
            />
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              onClick={() => navigate(`/pokemon/${searchInput}`)}
            >
                <img style={{ width: '30px' }} src={Pokeball} alt="pokeball" />
            </button>
        </div>
    );
};

export default SearchBar;