import fetch from 'node-fetch';

export default function getPokemon(page = 1) {
  return fetch(`http://alchemy-pokedex.herokuapp.com/api/pokedex?page=${page}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, pokemons]) => {
      if(!ok) throw 'Unable to fetch pokemons';
      return pokemons;
    })
    .then(results => {
      return results.results;
    });
}

export function getPokemonPaging() {
  return fetch('http://alchemy-pokedex.herokuapp.com/api/pokedex')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, pokemons]) => {
      if(!ok) throw 'Unable to fetch pokemons';
      return pokemons;
    })
    .then(results => {
      const totalPages = Math.ceil(results.count / results.perPage);
      return totalPages;
    });
}

export function getPokemonDetail(id) {
  return fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${id}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, pokemonDetail]) => {
      if(!ok) throw 'Unable to fetch pokemon detail';
      return pokemonDetail;
    });
}
