import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";


interface Props {
    pokemons: SimplePokemon[],
}

export function PokemonGrid ({ pokemons }: Props) {
    return (
        <div className="flex justify-center items-center flex-wrap gap-10">
            {pokemons.map( (pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                />
            ))}
        </div>
    )
}