import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AllPokemon from '../containers/pokemon/AllPokemon';
import PokemonById from '../containers/pokemon/PokemonById';

export default function App() {
  return (
    <Router>
      <h1>Welcome to Pokedex</h1>
      <Switch>
        <Route exact path='/' component={AllPokemon} />
        <Route path='/:id' component={PokemonById} />
      </Switch>
    </Router>
  );
}
