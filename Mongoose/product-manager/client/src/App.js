import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import Product from './components/Product';
import ProductsDisplay from './components/ProductsDisplay';
import AppContext from './AppContext';
import './App.css';

const App = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  });

  return (
    <div className="App">
      <AppContext.Provider value={{ products, setProducts }}>
        <Router>
          <ProductsDisplay path="/" />
          <Product path="/:id/" />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
