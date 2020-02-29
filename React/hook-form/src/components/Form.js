import React, { useState } from 'react';

const Form = (props) => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: false
    });

    const onChangeHandler = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(state);
        setState({
            ...state,
            submitted: true
        });
    }

    return (
        <div>
            <h1>{(state.submitted) ? 'Congratulations! You have submitted your form.' : 'You have not submitted your form yet!'}</h1>
            <form className="topForm" onSubmit={onSubmitHandler}>
                <label>First Name:</label>
                <input type="text" name="firstName" placeholder="First Name" onChange={onChangeHandler} />
                <br />
                <small>{(state.firstName.length > 0 && state.firstName.length < 2) ? "First Name must be at least 2 characters." : ""}</small>

                <br />
                <label>Last Name:</label>
                <input type="text" name="lastName" placeholder="Last Name" onChange={onChangeHandler} />
                <br />
                <small>{(state.lastName.length > 0 && state.lastName.length < 2) ? "Last Name must be at least 2 characters." : ""}</small>

                <br />
                <label>Email:</label>
                <input type="email" name="email" placeholder="Email" onChange={onChangeHandler} />
                <br />
                <small>{(state.email.length > 0 && state.email.length < 5) ? "Email must be at least 5 characters." : ""}</small>

                <br />
                <label>Password:</label>
                <input type="password" name="password" placeholder="Password" onChange={onChangeHandler} />
                <br />
                <small>{(state.password.length > 0 && state.password.length < 8) ? "Password be at least 8 characters." : ""}</small>
                <br />

                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={onChangeHandler} />
                <br />
                <small>{(state.confirmPassword.length > 0 && state.confirmPassword !== state.password) ? "The passwords must match." : ""}</small>
                <br />

                <input type="submit" />
            </form>

            <p>First Name: {state.firstName}</p>
            <p>Last Name: {state.lastName}</p>
            <p>Email: {state.email}</p>
            <p>Password: Password</p>
            <p>Confirm Password: Confirm Password</p>
        </div>
    );
}

export default Form;