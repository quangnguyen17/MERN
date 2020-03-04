import React, { useState, useEffect } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { Link } from '@reach/router';
import axios from 'axios';

const PlayerStatus = () => {
    const [players, setPlayers] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data))
            .catch(err => setErrors(err.data));
    }, [players]);

    const statusOnChange = (event, playerID) => {
        const status = event.target.innerText;
        axios.put(`http://localhost:8000/api/players/${playerID}`, { status: status })
            .then(res => console.log(res.data))
            .catch(err => setErrors(err.data));
    }

    return (
        <div>
            <Container>
                <Row>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link to='#'><h4 className="m-0">Game 1</h4></Link>
                        </li>
                        <li className="list-inline-item">
                            <h4>|</h4>
                        </li>
                        <li className="list-inline-item">
                            <Link to='#'><h4 className="m-0">Game 2</h4></Link>
                        </li>
                        <li className="list-inline-item">
                            <h4>|</h4>
                        </li>
                        <li className="list-inline-item">
                            <Link to='#'><h4 className="m-0">Game 3</h4></Link>
                        </li>
                    </ul>
                </Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players ? players.map((player, index) => (
                                <tr key={player._id}>
                                    <td className='m-0 align-middle'><Link to='/'>{player.teamName}</Link></td>
                                    <td>
                                        <button onClick={event => statusOnChange(event, player._id)} className={`btn ${player.status === 'Playing' ? 'btn-success' : 'btn-outline-success'} px-5 border border-dark rounded-0 mx-1`}>Playing</button>
                                        <button onClick={event => statusOnChange(event, player._id)} className={`btn ${player.status === 'Not Playing' ? 'btn-danger' : 'btn-outline-danger'} px-5 border border-dark rounded-0 mx-1`}>Not Playing</button>
                                        <button onClick={event => statusOnChange(event, player._id)} className={`btn ${player.status === 'Undecided' ? 'btn-warning' : 'btn-outline-warning'} px-5 border border-dark rounded-0 mx-1`}>Undecided</button>
                                    </td>
                                </tr>
                            )) : ''}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    );
}

export default PlayerStatus;