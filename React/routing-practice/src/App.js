import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import './App.css';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

const PageNumber = ({ num }) => {
  return (
    <div>
      <h1>The number is {num}</h1>
    </div>
  );
}

const WordPage = ({ word }) => {
  return (
    <div>
      <h1>Hello {word}!</h1>
    </div>
  );
}

const ColoredWordPage = ({ word, color }) => {
  const Heading1 = styled.h1`
    background-color: ${({ bgColor }) => bgColor || 'white'};
  `;

  return (
    <div>
      <Heading1 bgColor={color}>{word} with background-color of {color}</Heading1>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <PageNumber path="/:num" />
        <WordPage path="hello/:word" />
        <ColoredWordPage path="hello/:word/:color" />
      </Router>
    </div>
  );
}

export default App;
