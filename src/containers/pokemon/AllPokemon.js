import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemons, getPokemonsLoading, getPokemonsError } from '../../selectors/pokemonSelectors';
import { getPaging } from '../../selectors/pagingSelectors';
import PokeDeck from '../../components/pokemon/PokeDeck';
import { fetchPokemons } from '../../actions/pokemonsActions';
import { fetchPages } from '../../actions/pokemonPagingActions';


class AllPokemon extends PureComponent {
  static propTypes = {
    pokemons: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired,
    fetchPagingInfo: PropTypes.func.isRequired
  }

  state = {
    page: 1,
    totalPages: this.props.fetchPagingInfo()
  }

  componentDidMount() {
    this.props.fetch(this.state.page);
    console.log(this.props.fetchPagingInfo());
    this.setState({ totalPages: this.props.fetchPagingInfo() });
  }

  render() {
    if(this.props.loading) return <h1>Loading...</h1>;
    return (
    <>
      <section>
        <p>Page {this.state.page} of {this.state.totalPages}</p>
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
  totalPages: getPaging(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(page)  {
    dispatch(fetchPokemons(page));
  },
  fetchPagingInfo() {
    dispatch(fetchPages());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPokemon);

