'use client'

import React, { useState } from 'react';
// import PokemonsList from '../pokemonsList/PokemonsList';

interface Props {
    value?: number,
}


export default function Counter ({ value = 10 }: Props) {
    const [ counter, setCounter ] = useState(value);
    return ( 
        <>
            <span className='text-9xl text-gray-800'>{counter}</span>
            <div className='flex justify-center items-center'>
                <button 
                    className='min-w-auto w-32 h-10 bg-green-300 p-2 rounded-xl hover:bg-green-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold mr-9'
                    type='button'
                    onClick={(e) => setCounter(counter + 1)}>Increment +</button>
                <button 
                    className='min-w-auto w-32 h-10 bg-red-300 p-2 rounded-xl hover:bg-red-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold'
                    type='button'
                    onClick={(e) => setCounter(counter - 1)}>Decrement -</button>                    
            </div>
        </>
    )
}