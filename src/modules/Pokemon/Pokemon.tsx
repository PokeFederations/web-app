import React, { Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Fallback } from '../../components';
import useGetPokemonById from '@models/useGetPokemonById';
const PokemonCard = React.lazy(() => import('@components/PokemonCard'));

const Pokemon = () => {
  const { pokemonId } = useParams();
  const { data: pokemon } = useGetPokemonById({ id: pokemonId });

  const getParsedPokemon = () => ({
    id: pokemon.id,
    name: pokemon.name,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    types: [...pokemon.types.map((type: any) => type.type.name)],
    sprites: [pokemon.sprites.front_default, pokemon.sprites.back_default],
  });

  return (
    <div>
      <Link to="/">Return to home</Link>
      <Suspense fallback={<Fallback />}>
        {pokemon && (
          <PokemonCard
            pokemon={getParsedPokemon()}
            onNameClick={(id: number) => console.log({ id })}
            onTypeClick={(type: string) => console.log({ type })}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Pokemon;
