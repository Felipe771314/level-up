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
exports.getPokemonList = void 0;
const axios_1 = __importDefault(require("axios"));
function getPokemonList(limit = 20) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
            const pokemonList = response.data.results;
            const pokemons = yield Promise.all(pokemonList.map((pokemon) => __awaiter(this, void 0, void 0, function* () {
                const pokemonData = yield getPokemonData(pokemon.url);
                return {
                    id: pokemonData.id,
                    name: pokemonData.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`,
                    types: pokemonData.types.map((type) => type.type.name),
                    evolutions: [], // Implementar la lógica para obtener las evoluciones
                };
            })));
            return pokemons;
        }
        catch (error) {
            console.error('Error fetching Pokémon data:', error);
            return [];
        }
    });
}
exports.getPokemonList = getPokemonList;
function getPokemonData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            console.error('Error fetching Pokémon data:', error);
            return null;
        }
    });
}
