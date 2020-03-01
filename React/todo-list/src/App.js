import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import './App.css';

const StyledP = styled.p`
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  display: inline-block;
`;

const ToDoField = styled.input`
  padding: 16px;
  border: 0.75px solid rgb(240, 240, 240);
  border-radius: 8px;
  outline-width: 0;
  font-size: 1rem;
  display: inline-block;
  width: 50vw;
  margin-right: 4px;
`;

const SubmitButton = styled.input`
  padding: 16px;
  border: 0.75px solid rgb(240, 240, 240);
  border-radius: 8px;
  outline-width: 0;
  font-size: 1rem;
  font-weight: bolder;
  display: inline-block;
  margin-left: 4px;
  background-color: rgb(75, 75, 75);
  color: white;
`;

const App = () => {
  const toDoFieldRef = useRef();

  const [state, setState] = useState({
    toDoItems: [], newItem: ''
  });

  const formOnSubmit = event => {
    event.preventDefault();
    setState({ ...state, toDoItems: state.toDoItems.concat([{ item: state.newItem, completed: false }]) });
    toDoFieldRef.current.value = '';
  }

  const toDoFieldOnChange = event => setState({ ...state, newItem: event.target.value });

  const deleteOnClick = index => {
    state.toDoItems.splice(index, 1);
    setState({ ...state, toDoItems: state.toDoItems });
  }

  const checkboxOnChange = (index, value) => {
    state.toDoItems[index].completed = !state.toDoItems[index].completed;
    setState({ ...state, toDoItems: state.toDoItems });
  }

  useEffect(() => {
    setState({ toDoItems: JSON.parse(localStorage.getItem('toDoItems')) });
  }, []);

  useEffect(() => {
    localStorage.setItem('toDoItems', JSON.stringify(state.toDoItems));
  }, [state]);

  return (
    <div className="App">
      <h1>TO-DO List</h1>
      <ul>
        {state.toDoItems.map((toDo, index) => (
          <li key={index}>
            <StyledP checked={toDo.completed}>- {toDo.item}</StyledP>
            <input className="checkbox-custom" onChange={event => checkboxOnChange(index, event.target.value)} type="checkbox" checked={toDo.completed} />
            <button onClick={event => deleteOnClick(index)} className="btn-delete">Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={formOnSubmit}>
        <ToDoField ref={toDoFieldRef} onChange={toDoFieldOnChange} placeholder="Enter your ToDo here..." />
        <SubmitButton type="submit" value="Add To List" />
      </form>
    </div>
  );
}

export default App;
