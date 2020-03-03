import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';

export default ({ id }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Edit Product</h1>
            <Form product={product} update={true} />
        </div>
    );
}