import { PokemonsResponse, SimplePokemon } from '@/pokemons';
import { PokemonGrid } from '@/pokemons/components/PokemonGrid';

const fetchPokemons = async (
  limit: number = 151,
  offset: number = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function DashboardPokemons() {
  const pokemons = await fetchPokemons(151);
  return (
    <div className='flex flex-col'>
      <h1 className='text-center p-10 text-4xl font-bold text-black underline'>
        Pokemon list
      </h1>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
