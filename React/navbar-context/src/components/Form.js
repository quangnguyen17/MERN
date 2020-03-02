import React, { useContext } from 'react';
import styled from 'styled-components';
import MyContext from './MyContext';

const StyledField = styled.input`
    background-color: rgb(250, 250, 250);
    border-radius: 12px;
    padding: 16px;
    border-style: none;
    outline-width: 0;
    font-size: 1rem;
    margin-left: 8px;
`;

const Form = () => {
    const { name, setName } = useContext(MyContext);

    return (
        <div>
            <form>
                <label>Your Name</label>
                <StyledField onChange={event => setName(event.target.value)} placeholder={name} />
            </form>
        </div>
    );
}

export default Form;