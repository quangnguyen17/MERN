import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Table, Modal, Button } from 'react-bootstrap';
import { Link } from "@reach/router";

export default () => {
    const [players, setPlayers] = useState(null);
    const [errors, setErrors] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data))
            .catch(err => setErrors(err.data));
    }, [players]);

    const deletePlayerHandler = id => {
        axios.delete(`http://localhost:8000/api/players/${id}`)
            .then(res => handleClose())
            .catch(err => setErrors(err.data));
    }

    return (
        <Container>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players ? players.map(player => (
                            <tr key={player._id}>
                                <td className='m-0 align-middle'><Link to='/'>{player.teamName}</Link></td>
                                <td className='m-0 align-middle'>{player.preferredPosition}</td>
                                <td>
                                    <button onClick={() => handleShow()} className="btn btn-danger px-5 border border-dark rounded-0">Delete</button>
                                    <Modal show={show} onHide={handleClose} centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Delete Player</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Are you sure that you want to delete {player.teamName} from your team?</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="outline-secondary" onClick={handleClose}>Cancel</Button>
                                            <Button variant="danger" onClick={() => deletePlayerHandler(player._id)}>Delete</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </td>
                            </tr>
                        )) : ''}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}