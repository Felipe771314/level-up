"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeCarousel = void 0;
require("owl.carousel/dist/assets/owl.carousel.css");
require("owl.carousel");
require('./index.scss');
function initializeCarousel(pokemons) {
    const pokemonCarousel = $('#pokemonCarousel');
    if (pokemonCarousel) {
        pokemonCarousel.empty(); // Limpiar el carousel antes de agregar nuevos elementos
        pokemons.forEach((pokemon) => {
            const card = $('<div class="c-card"></div>');
            card.html(`
                <img src="${pokemon.image}" class="c-card__img" alt="${pokemon.name}">
                <div class="c-card__body">
                    <h2 class="c-card__body-title">${pokemon.name}</h2>
                    <p class="c-card__body-text">Type: ${pokemon.types.join(', ')}</p>
                    <p class="c-card__body-text">Description: ${pokemon.evolutions}</p>
                </div>
            `);
            pokemonCarousel.append(card);
        });
        pokemonCarousel.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: { items: 1 },
                600: { items: 3 },
                1000: { items: 5 }
            }
        });
    }
}
exports.initializeCarousel = initializeCarousel;
