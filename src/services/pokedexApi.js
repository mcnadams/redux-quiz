export default function getPokemon() {
  return fetch('http://alchemy-pokedex.herokuapp.com/')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, pokemons]) => {
      if(!ok) throw 'Unable to fetch characters';
      return pokemons;
    });
}
