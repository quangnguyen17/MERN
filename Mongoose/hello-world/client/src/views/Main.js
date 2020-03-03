import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import axios from 'axios';

export default () => {
    const [people, setPeople] = useState('Loading...');

    useEffect(() => {
        axios.get('http://localhost:8000/api/people').then(response => {
            setPeople(JSON.stringify(response.data));
        });
    }, []);

    return (<div>
        <h3>Message from backend</h3>
        <PersonForm />
    </div>);
}