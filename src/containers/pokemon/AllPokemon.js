import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemons, getPokemonsLoading, getPokemonsError, getPages } from '../../selectors/pokemonSelectors';
import PokeDeck from '../../components/pokemon/PokeDeck';
import { fetchPokemons } from '../../actions/pokemonsActions';


class AllPokemon extends PureComponent {
  static propTypes = {
    pokemons: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired
  }

  state = {
    page: 1
  }

  componentDidMount() {
    this.props.fetch(this.state.page);
  }

  render() {
    if(this.props.loading) return <h1>Loading...</h1>;
    return (
    <>
      <section>
        <p>Page {this.state.page} of {this.props.totalPages}</p>
        <button>Previous Page</button>
        <button>Next Page</button>
      </section>
      <PokeDeck pokemons={this.props.pokemons} />
    </>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: getPokemons(state),
  loading: getPokemonsLoading(state),
  error: getPokemonsError(state),
  totalPages: 2 || getPages(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(page)  {
    dispatch(fetchPokemons(page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPokemon);

