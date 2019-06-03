import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  getPokemonDetail, 
  getPokemonDetailError, 
  getPokemonDetailLoading 
} from '../../selectors/pokemonDetailSelectors';
import PokemonDetail from '../../components/pokemon/PokemonDetail';
import { fetchPokemonDetail } from '../../actions/pokemonDetailActions';

class PokemonById extends PureComponent {

  static propTypes = {
    pokemon: PropTypes.shape({
      pokemon: PropTypes.string.isRequired,
      url_image: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      weight: PropTypes.number.isRequired,
      base_experience: PropTypes.number.isRequired,
      attack: PropTypes.number.isRequired,
      defense: PropTypes.number.isRequired
    }),
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if(this.props.loading) return <h1>Loading</h1>;
    return <PokemonDetail pokemon={this.props.pokemon} />;
  }
}

const mapStateToProps = state => ({
  pokemon: getPokemonDetail(state),
  loading: getPokemonDetailLoading(state),
  error: getPokemonDetailError(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchPokemonDetail(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonById);
