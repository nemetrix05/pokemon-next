import Image from 'next/image';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Link from 'next/link';

interface Props {
  pokemon: SimplePokemon;
}

export function PokemonCard({ pokemon }: Props) {
  const { id, name } = pokemon;

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs'>
        <div className='pokemon-image justify-center flex'>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
            alt={name}
            width={120}
            height={120}
            quality={100}
            priority={false}
          />
        </div>
        <h1 className='text-lg text-gray-700 mb-5'> {name} </h1>
        <Link
          href={`/dashboard/pokemons/${name}`}
          className='bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide'
        >
          See details
        </Link>
      </div>
    </div>
  );
}
