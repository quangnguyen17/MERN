import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [products, setProducts] = useState("Loading data...");
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  });

  return (
    <div className="App">
      <Form />
      {JSON.stringify(products)}
    </div>
  );
}

export default App;
