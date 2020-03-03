import React from 'react';
import axios from 'axios';

export default ({ id, callBack }) => {
    const deleteOnClick = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                if (callBack) {
                    callBack();
                }

                console.log(callBack);
            })
            .catch(err => console.log(err));
    }

    return (<button style={{ padding: 16 + 'px', color: 'red' }} onClick={deleteOnClick}>Delete Product</button>);
}