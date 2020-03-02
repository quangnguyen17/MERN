import React, { useState } from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
    list-style-type: none;
`;

const Main = () => {
    const [pokemons, setPokemons] = useState(null);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=40&limit=964")
            .then(response => response.json())
            .then(response => setPokemons(response))
            .catch(error => console.log(error));
    }

    return (<div>
        <button onClick={fetchPokemon}>Fetch Pokemon!</button>
        <StyledList>
            {pokemons ? pokemons.results.map((object, index) => (
                <li key={index}><b>{object.name}</b> - {object.url}</li>
            )) : ''}
        </StyledList>
    </div>);
}

export default Main;