import React, { useState, useEffect } from 'react';
import { Router, navigate, Link } from '@reach/router';
import AppContext from './AppContext';
import axios from 'axios';
import './App.css';
import ObiWan from './obi_wan.jpg';

const MainPage = () => {
  const [state, setState] = useState({ firstPara: 'people', secondPara: '1' });

  const searchOnSubmit = event => {
    event.preventDefault();
    navigate(`/${state.firstPara}/${state.secondPara}`);
  }

  return (
    <div>
      <AppContext.Provider value={{ state, setState }}>
        <form onSubmit={event => searchOnSubmit(event)}>
          <label>Search for:</label>
          <select onChange={event => setState({ ...state, firstPara: event.target.value })}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
          </select>
          <label>ID:</label>
          <input onChange={event => setState({ ...state, secondPara: event.target.value })} placeholder="Default (1)" />
          <input type="submit" value="Search" />
        </form>
      </AppContext.Provider>
    </div>
  );
}

const DetailPage = ({ keyword, id }) => {
  const [state, setState] = useState({ data: null, homeworld: null });

  useEffect(() => {
    axios.get(`https://swapi.co/api/${keyword}/${id}/`).then(response => {
      if ('homeworld' in response.data) {
        axios.get(response.data['homeworld']).then(homeworldResponse => {
          setState({ ...state, data: response.data, homeworld: homeworldResponse.data });
        });
      } else {
        setState({ ...state, data: response.data });
      }
    });
  }, [keyword, id]);

  const ShowError = () => {
    return (
      <div style={{ marginTop: 4 + 'em' }}>
        <p>Obi: You're supposed to live. These aren't the droids you're looking for.</p>
        <img height="250" width="250" src={ObiWan} alt="ObiWan" />
      </div >
    );
  }

  const getID = url => url.slice(url.length - 2)[0];

  return (
    <div>
      <h3>Showing results for keyword '{keyword}' and id '{id}' </h3>
      <ul>
        {state.data ? Object.keys(state.data).map((key, index) => (
          <li key={index}>
            <p><b>{key}</b>: {state.data[key]}</p>
          </li>
        )) : ShowError()}
      </ul>
      {keyword === 'people' ? <ul>
        {(state.homeworld && keyword === 'people') ? <Link to={`/planets/${getID(state.homeworld.url)}`}>Explore Homeworld!</Link> : ''}
        {(state.homeworld && keyword === 'people') ? Object.keys(state.homeworld).map((key, index) => (
          <li key={index}>
            <p><b>{key}</b>: {state.homeworld[key]}</p>
          </li>
        )) : ShowError()
        }
      </ul> : ''}
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Router>
        <MainPage path="/" />
        <DetailPage path="/:keyword/:id" />
      </Router>
    </div>
  );
}

export default App;
