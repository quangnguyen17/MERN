import React, { useContext, useState } from 'react';
import './App.css';
import Form from './components/Form'
import MyContext from './components/MyContext';

const Navbar = () => {
  const { name } = useContext(MyContext);

  return (<div className="navbar">
    {name}
  </div>);
}

const FormWrapper = () => {
  return (<div className="form">
    <Form />
  </div>);
}

const Wrapper = () => {
  return (<div>
    <Navbar />
    <FormWrapper />
  </div>);
}

const App = () => {
  const [name, setName] = useState('name');

  return (
    <MyContext.Provider value={{ name, setName }}>
      <Wrapper>
      </Wrapper>
    </MyContext.Provider >
  );
}

export default App;
