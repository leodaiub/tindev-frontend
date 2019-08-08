import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({history}) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const { _id} = response.data;

        if(username){ history.push(`/dev/${_id}`)}
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tindev" />
                <input 
                    type="text" 
                    placeholder="Digite seu usuário no github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />
                <button>Entrar</button>
            </form>
        </div>
    );
}