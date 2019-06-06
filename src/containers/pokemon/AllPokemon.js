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
    fetchPagingInfo: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired
  }

  state = {
    page: 1
  }

  // since you do the same fetch a bunch
  // its nice to create a function here.
  fetch = () => {
    this.props.fetch(this.state.page);
  }

  componentDidMount() {
    this.props.fetchPagingInfo();
    this.fetch();
  }

  prevPage = () => {
    const currPage = this.state.page;
    this.setState({ page: currPage - 1 }, () => {
      // fetch after the page updates in state
      this.fetch();
    });
  }

  nextPage = () => {
    const currPage = this.state.page;
    this.setState({ page: currPage + 1 }, () => {
      this.fetch();
    });
  }

  render() {
    if (this.props.loading) return <h1>Loading...</h1>;
    return (
      <>
        <section>
          <p>Page {this.state.page} of {this.props.totalPages}</p>
          <button onClick={() => this.prevPage()} disabled={this.state.page <= 1}>Previous Page</button>
          <button onClick={() => this.nextPage()} disabled={this.state.page >= this.props.totalPages}>Next Page</button>
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
  fetch(page) {
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
