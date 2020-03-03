import React, { useState } from 'react';
import axios from 'axios';

const Form = props => {
    const [state, setState] = useState({ title: null, price: null, desc: null });

    const formOnSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/products', { title: state.title, price: state.price, desc: state.desc })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={event => formOnSubmit(event)}>
                <label>Product Name: </label>
                <br />
                <input onChange={event => setState({ ...state, title: event.target.value })} type="text" placeholder="Product Title" />
                <br />
                <label>Product Price: </label>
                <br />
                <input onChange={event => setState({ ...state, price: event.target.value })} type="text" placeholder="Product Price" />
                <br />
                <label>Product Description: </label>
                <br />
                <input onChange={event => setState({ ...state, desc: event.target.value })} type="text" placeholder="Product Description" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Form;