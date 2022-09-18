import React, { useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import { Fallback } from '../components';
import handleHelloWorldAlert from '@utils/handleHelloWorldAlert';
import useGetPokemonById from '@models/PokemonModel';
const Button = React.lazy(() => import('@components/Button'));
const PokemonCard = React.lazy(() => import('@components/PokemonCard'));

const Home = () => {
  const navigate = useNavigate();
  const [pokemonId, setPokemonId] = useState(1);
  const { data: pokemon } = useGetPokemonById({ id: pokemonId });
  console.log({ pokemon });

  const getParsedPokemon = () => ({
    id: pokemon.id,
    name: pokemon.name,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    types: [...pokemon.types.map((type: any) => type.type.name)],
    sprites: [pokemon.sprites.front_default, pokemon.sprites.back_default],
  });

  return (
    <div>
      <div>Hello PokeFederations (web-app)</div>
      <Suspense fallback={<Fallback />}>
        <Button onClick={() => setPokemonId((prevPokemonId) => prevPokemonId - 1)}>-</Button>
        {pokemonId}
        <Button onClick={() => setPokemonId((prevPokemonId) => prevPokemonId + 1)}>+</Button>

        <br />

        {pokemon && (
          <PokemonCard
            pokemon={getParsedPokemon()}
            onNameClick={(id: number) => navigate(`/pokemon/${id}`)}
            onTypeClick={(type: string) => console.log({ type })}
          />
        )}

        <br />

        <Button onClick={() => handleHelloWorldAlert()}>
          Button component comming from ui-components
        </Button>
      </Suspense>
    </div>
  );
};

export default Home;
