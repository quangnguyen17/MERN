import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import MyNewComponent from './components/MyNewComponent';
// import HelloWorld from './components/HelloWorld';
// import PersonCard from './components/PersonCard';

const PersonCard = (person) => {
  return (
    <div>
      <h1>{person.lastName}, {person.firstName}</h1>
      <p>Age: {person.age}</p>
      <p>Hair Color: {person.hairColor}</p>
    </div>
  );
}

const getPersonAt = (index) => {
  const people = [
    {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 45,
      hairColor: 'Black'
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 88,
      hairColor: 'Brown'
    },
    {
      firstName: 'Millard',
      lastName: 'Fillmore',
      age: 50,
      hairColor: 'Brown'
    },
    {
      firstName: 'Maria',
      lastName: 'Smith',
      age: 62,
      hairColor: 'Brown'
    }
  ]

  return people[index];
}

const App = () => {
  return (
    <div className="App">
      <PersonCard firstName={getPersonAt(0).firstName} lastName={getPersonAt(0).lastName} age={getPersonAt(0).age} hairColor={getPersonAt(0).hairColor} />
      <PersonCard firstName={getPersonAt(1).firstName} lastName={getPersonAt(1).lastName} age={getPersonAt(1).age} hairColor={getPersonAt(1).hairColor} />
      <PersonCard firstName={getPersonAt(2).firstName} lastName={getPersonAt(2).lastName} age={getPersonAt(2).age} hairColor={getPersonAt(2).hairColor} />
      <PersonCard firstName={getPersonAt(3).firstName} lastName={getPersonAt(3).lastName} age={getPersonAt(3).age} hairColor={getPersonAt(3).hairColor} />
    </div>
  );
}

export default App;
