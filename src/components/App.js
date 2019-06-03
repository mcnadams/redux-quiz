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
      <Link to='/'>Home</Link>
      <Switch>
        <Route exact path='/' component={AllPokemon} />
        <Route path='/:id' component={PokemonById} />
      </Switch>
    </Router>
  );
}
