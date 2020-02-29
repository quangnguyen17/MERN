import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const person = this.props;
        return (
            <div>
                <h1>{person.lastName}, {person.firstName}</h1>
                <p>Age: {person.age}</p>
                <p>Hair Color: {person.hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;