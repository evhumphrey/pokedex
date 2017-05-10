import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.store = store;

  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
