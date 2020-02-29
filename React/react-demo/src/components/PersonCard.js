import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: this.props.age
        }
    }

    birthdayClicked = () => {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        const person = this.props;
        return (
            <div>
                <h1>{person.lastName}, {person.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {person.hairColor}</p>
                <button onClick={this.birthdayClicked}>It's Birthday for {person.firstName}</button>
            </div >
        );
    }
}

export default PersonCard;