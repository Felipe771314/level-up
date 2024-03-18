import axios from 'axios';

export interface Pokemon {
    id: number;
    name: string;
    image: string;
    types: string[];
    description: string;
    evolutions: string[];
}

export async function getPokemonList(limit: number = 20): Promise<Pokemon[]> {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const pokemonList = response.data.results;

        const pokemons: Pokemon[] = await Promise.all(pokemonList.map(async (pokemon: any) => {
            const pokemonData = await getPokemonData(pokemon.url);
            return {
                id: pokemonData.id,
                name: pokemonData.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`,
                types: pokemonData.types.map((type: any) => type.type.name),
                evolutions: [],
            };
        }));

        return pokemons;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return [];
    }
}

async function getPokemonData(url: string): Promise<any> {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return null;
    }
}
