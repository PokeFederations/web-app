import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QueryClientProvider from '@models/QueryClientProvider';
import ThemeProvider from '@components/ThemeProvider';
import Home from './views/Home';
import Pokemon from './views/Pokemon';

const App = () => {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
