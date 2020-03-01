import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const TabButton = styled.button`
    padding: 16px 32px;
    border: 0.75px solid rgb(230, 230, 230);
    font-size: 1rem;
    outline-width: 0;
    background-color ${props => props.selected ? 'black' : 'white'};
    color: ${props => props.selected ? 'white' : 'black'};
    transform: scale(${props => props.selected ? '1.3' : '1.0'});
    margin: 0px ${props => props.selected ? '24' : '0'}px;
    transition: all 0.5s ease;
`;

const StyledParagraph = styled.p`
    padding: 24px;
    border: 0.75px solid rgb(230, 230, 230);
    transition: all 0.5s ease;
`;

const Main = () => {
  const [state, setState] = useState({
    selectedTab: 1
  });

  const tabOnClick = (event, value) => {
    setState({
      selectedTab: value
    });
  }

  return (
    <div>
      <h1>Tabs (Optional)</h1>
      {[1, 2, 3].map((item, index) => <TabButton key={index} onClick={event => tabOnClick(event, item)} selected={(state.selectedTab === item)}>Tab {item}</TabButton>)}
      <StyledParagraph>Tab {state.selectedTab} is currently showing.</StyledParagraph>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
