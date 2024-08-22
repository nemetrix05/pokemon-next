"use client"

import React from 'react';
import useFetchPokemons from '../../hooks/useFetchPokemons';

interface Props {
    limit: Number,
};

export default function PokemonsList ({ limit }: Props) {
    const { pokemons, isLoading, isError } = useFetchPokemons(limit);

    console.log('data:', pokemons?.results);

    return (
        <div>SWR LOAD PAGE</div>
    )
}