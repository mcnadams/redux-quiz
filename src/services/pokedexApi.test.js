import getPokemon, { getPokemonDetail, getPokemonPaging } from './pokedexApi.js';


describe('pokemon api tests', () => {
  it('gets first page of pokemom', () => {
    return getPokemon()
      .then(results => {
        expect(results).toHaveLength(20);
      });
  });

  it('get second page of pokemom', () => {
    return getPokemon(2)
      .then(results => {
        expect(results).toHaveLength(20);
      });
  });

  it('gets pokemon paging info', () => {
    return getPokemonPaging()
      .then(pages => {
        expect(pages).toEqual(41);
      });
  });

  it('gets pokemon detail by id', () => {
    return getPokemonDetail('5cef3501ef6005a77cd4fdd0')
      .then(pokemon => {
        expect(pokemon).toEqual({
          '_id': '5cef3501ef6005a77cd4fdd0',
          'pokemon': 'pichu',
          'id': 187,
          'species_id': 172,
          'height': 3,
          'weight': 20,
          'base_experience': 41,
          'type_1': 'electric',
          'type_2': 'NA',
          'attack': 40,
          'defense': 15,
          'hp': 20,
          'special_attack': 35,
          'special_defense': 35,
          'speed': 60,
          'ability_1': 'static',
          'ability_2': 'NA',
          'ability_hidden': 'lightning-rod',
          'color_1': '#F8D030',
          'color_2': 'NA',
          'color_f': 'NA',
          'egg_group_1': 'no-eggs',
          'egg_group_2': 'NA',
          'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
          'generation_id': 2,
          'evolves_from_species_id': 'NA',
          'evolution_chain_id': 10,
          'shape_id': 8,
          'shape': 'quadruped',
          'pokebase': 'pichu',
          'pokedex': 'http://www.pokemon.com/us/pokedex/pichu'
        });
      });
  });

});
