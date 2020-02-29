import React, { useState } from 'react';

const Form = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onChangeHandler = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefaut();
    }

    return (
        <div>
            <form className="topForm" onSubmit={onSubmitHandler}>
                <label for="fn">First Name:</label>
                <input id="fn" type="text" name="firstName" onChange={onChangeHandler} />
                <br />
                <label for="ln">Last Name:</label>
                <input id="ln" type="text" name="lastName" onChange={onChangeHandler} />
                <br />
                <label for="email">Email:</label>
                <input id="email" type="email" name="email" onChange={onChangeHandler} />
                <br />
                <label for="password">Password:</label>
                <input id="password" type="password" name="password" onChange={onChangeHandler} />
                <br />
                <label for="confirmPassword">Confirm Password:</label>
                <input id="confirmPassword" type="password" name="confirmPassword" onChange={onChangeHandler} />
                <br />
                <input id="submitButton" type="submit" value="Submit" />
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