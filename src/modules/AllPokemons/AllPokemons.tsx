import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import { Fallback } from '../../components';
import parsePokemonToPartial from '@utils/parsePokemonToPartial';
import useViewModel from './useViewModel';

const PokemonCard = React.lazy(() => import('@components/PokemonCard'));
const Button = React.lazy(() => import('@components/Button'));
const Grid = React.lazy(() => import('@components/Grid'));

const AllPokemons = () => {
  const navigate = useNavigate();
  const { pokemonList, handleLoadMore, isLoading } = useViewModel();

  return (
    <div style={{ flexGrow: 1 }}>
      <Suspense fallback={<Fallback />}>
        <Grid container spacing={1.2}>
          {pokemonList.map((pokemon: any, index: number) => (
              <Grid key={index} item xs={1.2}>
                <PokemonCard
                  pokemon={parsePokemonToPartial(pokemon)}
                  onNameClick={(id: number) => navigate(`/pokemon/${id}`)}
                  onTypeClick={(type: string) => console.log({ type })}
                />
              </Grid>
            ))
          }
        </Grid>
        <div>
          <Button onClick={handleLoadMore} disabled={isLoading}>Load more</Button>
        </div>
      </Suspense>
    </div>
  );
};

export default AllPokemons;
