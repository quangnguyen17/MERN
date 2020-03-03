import React, { useContext } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { Link } from '@reach/router';
import AppContext from '../AppContext';

const ProductsDisplay = () => {
    const { products } = useContext(AppContext);

    const deleteOnClick = id => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const updateOnClick = id => {
        // axios.update(`http://localhost:8000/api/products/${id}`)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    }

    return (
        <div>
            <Form />
            <h3>All Products:</h3>
            <ul>
                {products ? products.map(product => (
                    <li key={product._id}>
                        <Link to={`/${product._id}`}><b>{product.title}</b></Link>
                        <br />
                        <button style={{ color: 'red' }} onClick={() => deleteOnClick(product._id)}>Delete Product</button>
                        <br />
                        <Link style={{ color: 'green' }} to={`/${product._id}/edit`}>Update Product</Link>
                        <p>Description: {product.desc} | Price: {product.price}</p>
                    </li>
                )) : ''}
            </ul>
        </div >
    );
}

export default ProductsDisplay;