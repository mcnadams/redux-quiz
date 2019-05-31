import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemons, getPokemonsLoading, getPokemonsError } from '../../selectors/pokemonSelectors';
import PokeDeck from '../../components/pokemon/PokeDeck';
import { fetchPokemons } from '../../actions/pokemonsActions';

class AllPokemon extends PureComponent {
  static propTypes = {
    pokemons: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if(this.props.loading) return <h1>Loading...</h1>;
    return <PokeDeck pokemons={this.props.pokemons} />;
  }
}

const mapStateToProps = state => ({
  pokemons: getPokemons(state),
  loading: getPokemonsLoading(state),
  error: getPokemonsError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch()  {
    dispatch(fetchPokemons());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPokemon);

