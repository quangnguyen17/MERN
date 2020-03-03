import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import Product from './components/Product';
import ProductsDisplay from './components/ProductsDisplay';
import UpdateProduct from './components/UpdateProduct';
import AppContext from './AppContext';
import './App.css';

// App
export default () => {
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
          <UpdateProduct path="/:id/edit" />
        </Router>
      </AppContext.Provider>
    </div>
  );
}