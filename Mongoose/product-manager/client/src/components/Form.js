import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Form = ({ product, update }) => {
    const [titleRef, priceRef, descRef] = [useRef(), useRef(), useRef()];
    const [state, setState] = useState({ title: null, price: null, desc: null });

    const formOnSubmit = (event) => {
        event.preventDefault();

        if (update !== undefined) {
            axios.put(`http://localhost:8000/api/products/${product._id}`, { title: state.title, price: state.price, desc: state.desc })
                .then(res => navigate('/'))
                .catch(err => console.log(err));
        } else {
            axios.post('http://localhost:8000/api/products', { title: state.title, price: state.price, desc: state.desc })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }

        titleRef.current.value = '';
        priceRef.current.value = '';
        descRef.current.value = '';
    }

    useEffect(() => {
        if (product) {
            titleRef.current.value = product.title;
            priceRef.current.value = product.price;
            descRef.current.value = product.desc;
            setState({ title: product.title, price: product.price, desc: product.desc });
        }
    }, [product]);

    return (
        <div>
            <form onSubmit={event => formOnSubmit(event)}>
                <label>Product Name: </label>
                <br />
                <input ref={titleRef} onChange={event => setState({ ...state, title: event.target.value })} type="text" placeholder="Product Title" />
                <br />
                <label>Product Price: </label>
                <br />
                <input ref={priceRef} onChange={event => setState({ ...state, price: event.target.value })} type="text" placeholder="Product Price" />
                <br />
                <label>Product Description: </label>
                <br />
                <input ref={descRef} onChange={event => setState({ ...state, desc: event.target.value })} type="text" placeholder="Product Description" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Form;