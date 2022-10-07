import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QueryClientProvider from '@models/QueryClientProvider';
import ThemeProvider from '@components/ThemeProvider';
import Header from './modules/Header';
import Home from './modules/Home';
import Pokemon from './modules/Pokemon';
import AllPokemons from './modules/AllPokemons';

const App = () => {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
            <Route path="/pokemon/all" element={<AllPokemons />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
