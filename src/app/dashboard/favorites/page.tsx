import { PokemonGrid } from '@/pokemons/components/PokemonGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Favorites page',
  description: 'Page about favorites pokemons',
};

export default async function DashboardPokemons() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-center p-10 text-4xl font-bold text-black underline'>
        Favorites pokemons
      </h1>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
