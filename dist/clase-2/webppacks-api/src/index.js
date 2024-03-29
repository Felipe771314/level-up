"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Función para obtener y mostrar los primeros 100 Pokémon de la API PokeAPI
function displayPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://pokeapi.co/api/v2/pokemon?limit=100');
            const pokemons = response.data.results;
            const pokemonListElement = document.getElementById('pokemonList');
            if (pokemonListElement) {
                pokemons.forEach((pokemon) => {
                    const pokemonItem = document.createElement('div');
                    pokemonItem.textContent = pokemon.name;
                    pokemonListElement.appendChild(pokemonItem);
                });
            }
            else {
                console.error('Element with id "pokemonList" not found');
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    });
}
// Llamar a la función para obtener y mostrar los primeros 100 Pokémon de la API PokeAPI
displayPokemon();
