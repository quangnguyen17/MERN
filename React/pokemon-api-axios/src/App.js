import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import './App.css';

const StyledList = styled.ul`
    list-style-type: none;
`;

const Main = () => {
  const [pokemons, setPokemons] = useState(null);
  const fetchPokemon = () => axios.get("https://pokeapi.co/api/v2/pokemon?offset=40&limit=964").then(response => setPokemons(response.data));

  return (<div>
    <button onClick={fetchPokemon}>Fetch Pokemon!</button>
    <StyledList>
      {pokemons ? pokemons.results.map((object, index) => (
        <li key={index}><b>{object.name}</b> - {object.url}</li>
      )) : 'Error! Voila!'}
    </StyledList>
  </div>);
}

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
