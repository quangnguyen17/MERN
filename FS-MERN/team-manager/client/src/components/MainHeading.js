import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from '@reach/router';

const MainHeading = () => {
    return (
        <div>
            <Container className="pt-5">
                <Row>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link to='/players/list'><h1 className="m-0">Manage Players</h1></Link>
                        </li>
                        <li className="list-inline-item">
                            <h1>|</h1>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/status/game/1'><h1 className="m-0">Manage Player Status</h1></Link>
                        </li>
                    </ul>
                </Row>
                <Row>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link to='/players/list'><h3 className="m-0">List</h3></Link>
                        </li>
                        <li className="list-inline-item">
                            <h3>|</h3>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/players/addplayer'><h3 className="m-0">Add Player</h3></Link>
                        </li>
                    </ul>
                </Row>
            </Container>
        </div>
    );
}


export default MainHeading;