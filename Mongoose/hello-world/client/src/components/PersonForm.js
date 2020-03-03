import React, { useState } from 'react'
import axios from 'axios';

const PersonForm = () => {
    const [name, setName] = useState({ firstName: null, lastName: null });

    const formOnSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/people', { firstName: name.firstName, lastName: name.lastName })
            .then(reponse => {
                console.log("Successfully added user", reponse)
            })
            .catch(error => console.log("Something went wrong. :(", error));
    }

    return (
        <div>
            <form onSubmit={event => formOnSubmit(event)}>
                <input onChange={event => setName({ ...name, firstName: event.target.value })} placeholder="First Name" />
                <input onChange={event => setName({ ...name, lastName: event.target.value })} placeholder="Last Name" />
                <input type="submit" placeholder="First Name" />
            </form>
        </div>
    );
}

export default PersonForm;
