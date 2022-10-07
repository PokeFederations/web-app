import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';

import { Fallback } from '../../components';
import getPokemonById from '@models/useGetPokemonById';
const PokemonCard = React.lazy(() => import('@components/PokemonCard'));

const AllPokemons = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  for(let i = 1; i <= 10; i++) {
    getPokemonById(
      { id: i,
        options: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onSuccess: (pokemon: any) => setPokemonList((prevState) => [...prevState, pokemon]),
        },
      },
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getParsedPokemon = (pokemon: any) => ({
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
{        // eslint-disable-next-line @typescript-eslint/no-explicit-any
}        {pokemonList.length > 0 && pokemonList.map((pokemon: any, index: number) => (
          <PokemonCard
            key={index}
            pokemon={getParsedPokemon(pokemon)}
            onNameClick={(id: number) => console.log({ id })}
            onTypeClick={(type: string) => console.log({ type })}
          />
        ))
        }
      </Suspense>
    </div>
  );
};

export default AllPokemons;
