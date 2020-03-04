import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Container } from 'react-bootstrap';
import MainHeading from '../components/MainHeading';

export default () => {
    const [errors, setErrors] = useState('* Name must be at least 2 characters in length.');
    const [teamName, setTeamName] = useState('');
    const [position, setPosition] = useState('');

    const playerNameOnChange = event => {
        setErrors((event.target.value.length < 2) ? '* Name must be at least 2 characters in length.' : '');
        setTeamName(event.target.value);
    }

    const positionOnChange = event => {
        setPosition(event.target.value);
    }

    const addPlayerOnSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/players/new', { teamName: teamName, preferredPosition: position })
            .then(res => navigate('/'))
            .catch(err => setErrors(err));
    }

    return (
        <div>
            <Container className="p-0">
                <form onSubmit={event => addPlayerOnSubmit(event)}>
                    <div className="form-row">
                        <label className="col-2 m-0 align-middle">Player Name: </label>
                        <input onChange={event => playerNameOnChange(event)} className="form-control col-10 align-middle rounded-0" placeholder="Required" required />
                        {errors ? <small className="col-12 m-0 my-2 text-center align-middle text-danger">{errors}</small> : ''}

                        <label className="col-2 m-0 align-middle mt-3">Preferred Position: </label>
                        <input onChange={event => positionOnChange(event)} className="form-control col-10 align-middle mt-3 rounded-0" placeholder="(Optional)" />

                        {errors ? <input type="submit" className="btn btn-success col-6 align-middle mt-3 mx-auto rounded-0" disabled />
                            : <input type="submit" className="btn btn-success col-6 align-middle mt-3 mx-auto rounded-0" />}
                    </div>
                </form>
            </Container>
        </div>
    );
}