import React, { Suspense } from 'react';

import { Fallback } from '../../components';
import useViewModel from './useViewModel';

import parsePokemonToPartial from '@utils/parsePokemonToPartial';
const PokemonCard = React.lazy(() => import('@components/PokemonCard'));

const Pokemon = () => {
  const { pokemon } = useViewModel();

  return (
    <div>
      <Suspense fallback={<Fallback />}>
        {pokemon && (
          <PokemonCard
            pokemon={parsePokemonToPartial(pokemon)}
            onNameClick={(id: number) => console.log({ id })}
            onTypeClick={(type: string) => console.log({ type })}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Pokemon;
