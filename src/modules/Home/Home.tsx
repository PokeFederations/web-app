import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import { Fallback } from '../../components';
import TPokemonCard from "../../../@mf-typescript/@components/PokemonCard";
import useViewModel from "./useViewModel";

import parsePokemonToPartial from '@utils/parsePokemonToPartial';
const Button = React.lazy(() => import('@components/Button'));
const PokemonCard = React.lazy(() => import('@components/PokemonCard')) as unknown as typeof TPokemonCard;

const Home = () => {
  const navigate = useNavigate();
  const { pokemon, handleNextPokemon, handlePreviousPokemon } = useViewModel();

  return (
    <div>
      <div>Hello PokeFederations (web-app)</div>
      <Suspense fallback={<Fallback />}>
        <Button onClick={handlePreviousPokemon}>-</Button>
          {pokemon?.id || 0}
        <Button onClick={handleNextPokemon}>+</Button>

        <br />

        {pokemon && (
          <PokemonCard
            pokemon={parsePokemonToPartial(pokemon)}
            onNameClick={(id: number) => navigate(`/pokemon/${id}`)}
            onTypeClick={(type: string) => console.log({ type })}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Home;
