import useSWR from 'swr';
import fetcherApi from '../utils/global';

export default function useFetchPokemons(limit, offset=0) {
    const {data, error, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, fetcherApi);
    return {
        pokemons: data,
        isLoading,
        isError: error
    }
}

