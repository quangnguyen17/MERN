import React, { useState } from 'react';
import styled from 'styled-components';
import './BoxAnimation.css';

const BackgroundColoredBox = styled.div`
    background-color: ${props => props.bgColor || 'black'};
    display: inline-block;
    width: ${props => props.length || '100'}px;
    height: ${props => props.length || '100'}px;
    justify-content: center;
    margin: 4px;
    -webkit-animation: roll-in-blurred-bottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
	        animation: roll-in-blurred-bottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
`;

const StyledField = styled.input`
    margin: 16px 4px;
    background-color: rgb(250, 250, 250);
    border-style: none;
    border-radius: 24px;
    font-size: 1rem;
    padding: 16px 24px;
    outline-width: 0;
`;

const LengthField = styled.input`
    margin: 16px 4px;
    background-color: rgb(250, 250, 250);
    border-style: none;
    border-radius: 24px;
    font-size: 1rem;
    padding: 16px 24px;
    outline-width: 0;
`;

const AddColorButton = styled.button`
    margin: 16px 4px;
    background-color: rgb(240, 240, 240);
    border-style: none;
    border-radius: 24px;
    font-size: 1rem;
    padding: 16px 24px;
    outline-width: 0;
`;

const BoxGenerator = (props) => {
    const colorField = React.createRef();
    const lengthField = React.createRef();

    const [state, setState] = useState({
        boxes: [
            { color: 'green', length: 100 }
        ],
        newCol: '',
        newLength: 0
    });

    const addColorButtonClicked = (event) => {
        try {
            event.preventDefault();
            setState({
                boxes: state.boxes.concat([{ color: state.newCol, length: state.newLength }]),
                newCol: '',
                newLength: 0
            });

            colorField.current.value = '';
            lengthField.current.value = '';
        } catch {
            console.error();
        }
    }

    const colorFieldOnChange = (event) => {
        event.preventDefault();
        setState({
            ...state,
            newCol: event.target.value
        })
    }

    const lengthFieldOnChange = (event) => {
        event.preventDefault();
        setState({
            ...state,
            newLength: event.target.value
        })
    }

    return (
        <div>
            <StyledField ref={colorField} onChange={colorFieldOnChange} placeholder="Color. Ex: red, green, blue..." />
            <LengthField ref={lengthField} onChange={lengthFieldOnChange} placeholder="Length. Ex: 20px, 100px, 50px,..." />

            <AddColorButton onClick={addColorButtonClicked}>Add Color</AddColorButton>
            <div>
                {state.boxes.map((obj, index) => <BackgroundColoredBox key={index} bgColor={obj.color} length={obj.length}></BackgroundColoredBox>)}
            </div>
        </div>
    );
}

export default BoxGenerator;