import getPokemon, { getPokemonDetail, getPokemonPaging } from './pokedexApi.js';


describe('pokemon api tests', () => {
  it('gets first page of pokemom', () => {
    return getPokemon()
      .then(results => {
        expect(results).toHaveLength(20);
      });
  });
});
