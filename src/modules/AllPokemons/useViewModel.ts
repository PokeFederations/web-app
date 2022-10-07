import { useState, useEffect } from 'react';
import useGetPokemonMany from '@models/useGetPokemonMany';

const POKEMON_LIMIT = 100 ;

const useViewModel = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  const { data: pokemonPage } = useGetPokemonMany({
    params: {
      limit: POKEMON_LIMIT, 
      page: page,
    },
  });

  useEffect(() => {
    if(!pokemonPage) return;
    setLoading(true);

    pokemonPage.results.map((pokemon: any, index: number) => (
      fetch(pokemon.url)
      .then((response) => response.json())
      .then((result) => {
          setPokemonList(
            (prevState) => [...prevState, result],
          );

          // disable loading when we fetch successfully the last pokemon
          if(index === POKEMON_LIMIT - 1) setLoading(false);
        },
      )
    ));
  }, [pokemonPage]);

  const handleLoadMore = () => setPage(page + 1);

  return {
    pokemonList,
    handleLoadMore,
    isLoading,
  };
};

export default useViewModel;
