import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const Product = ({ id }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

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
            {product ? <DeleteButton id={product._id} callBack={() => navigate('/')} /> : 'Loading...'}
        </div>
    );
}

export default Product;