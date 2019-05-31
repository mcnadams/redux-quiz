export default function getPokemon() {
  return fetch('http://alchemy-pokedex.herokuapp.com/api/pokedex')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, pokemons]) => {
      if(!ok) throw 'Unable to fetch characters';
      return pokemons;
    })
    .then(results => {
      return results.results;
    });
}
