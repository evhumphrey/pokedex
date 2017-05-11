import React from 'react';
import PokemonItem from './pokemon_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;

    return (
      <section className="pokedex">
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
        <ul>
          {
            pokemon.map((poke) => (
              <PokemonItem key={poke.id} poke={poke} />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
