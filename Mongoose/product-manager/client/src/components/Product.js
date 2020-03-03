import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';

const Product = ({ id }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const deleteOnClick = id => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err));
    }

    return (
        <div style={{ margin: 16 + 'px' }}>
            <h1>Product</h1>
            <br />
            {product ? <h2>Title: {product.title}</h2> : 'Loading...'}
            <br />
            {product ? <h4>Price: ${product.price}</h4> : 'Loading...'}
            <br />
            {product ? <p>Description: {product.desc}</p> : 'Loading...'}
            <br />
            <button style={{ color: 'red' }} onClick={() => deleteOnClick(product._id)}>Delete Product</button>
        </div>
    );
}

export default Product;