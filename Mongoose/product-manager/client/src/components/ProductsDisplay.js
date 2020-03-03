import React, { useContext } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { Link } from '@reach/router';
import AppContext from '../AppContext';
import DeleteButton from '../components/DeleteButton';

const ProductsDisplay = () => {
    const { products } = useContext(AppContext);

    return (
        <div>
            <Form />
            <h3>All Products:</h3>
            <ul>
                {products ? products.map(product => (
                    <li key={product._id}>
                        <Link to={`/${product._id}`}><b>{product.title}</b></Link>
                        <br />
                        <DeleteButton id={product._id} />
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