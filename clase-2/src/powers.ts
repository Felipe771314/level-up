export interface Power {
    name: string;
    description: string;
}

export async function getPokemonPowers(pokemonName: string): Promise<Power[]> {
    try {
        const powers: Power[] = await fetchPowersFromAPI(pokemonName);
        return powers;
    } catch (error) {
        console.error('Error al obtener los poderes del Pokémon:', error);
        throw error;
    }
}

async function fetchPowersFromAPI(pokemonName: string): Promise<Power[]> {
    return Promise.resolve([
        { name: 'Power 1', description: 'Description of Power 1' },
        { name: 'Power 2', description: 'Description of Power 2' },
        { name: 'Power 3', description: 'Description of Power 3' },
    ]);
}
