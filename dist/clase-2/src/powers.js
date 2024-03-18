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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonPowers = void 0;
function getPokemonPowers(pokemonName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Lógica para obtener los poderes de un Pokémon desde la API
            const powers = yield fetchPowersFromAPI(pokemonName);
            return powers;
        }
        catch (error) {
            console.error('Error al obtener los poderes del Pokémon:', error);
            // Manejar el error adecuadamente
            throw error;
        }
    });
}
exports.getPokemonPowers = getPokemonPowers;
function fetchPowersFromAPI(pokemonName) {
    return __awaiter(this, void 0, void 0, function* () {
        // Simulación de llamada a la API para obtener los poderes del Pokémon
        return Promise.resolve([
            { name: 'Power 1', description: 'Description of Power 1' },
            { name: 'Power 2', description: 'Description of Power 2' },
            { name: 'Power 3', description: 'Description of Power 3' },
        ]);
    });
}
