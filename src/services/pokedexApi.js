export default function getPokemon(page = 1) {
  return fetch(`http://alchemy-pokedex.herokuapp.com/api/pokedex?page=${page}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, pokemons]) => {
      if(!ok) throw 'Unable to fetch characters';
      return pokemons;
    })
    .then(results => {
      return results.results;
    });
}
