import { initializeCarousel } from './carousel';
import { getPokemonList } from './pokemon';

async function main() {
    const pokemons = await getPokemonList(20);
    initializeCarousel(pokemons);
}

main();
