import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:9001/Fitfreak/signup', {
                name,
                email,
                password
            });

            if (response.status === 200) {
                setMessage('Signup successful');
                navigate('/LandingPage');
            } else {
                setMessage('Signup failed');
            }
        } catch (error) {
            let errorMessage = 'An error occurred';
            if (error.response) {
                if (error.response.data) {
                    errorMessage = `Error: ${error.response.data.message || JSON.stringify(error.response.data)}`;
                } else {
                    errorMessage = 'Server error';
                }
            } else if (error.request) {
                errorMessage = 'No response received from the server';
            } else {
                errorMessage = `Error: ${error.message}`;
            }
            setMessage(errorMessage);
        }
    };

    return (
        <div className='signup-container'>
            <img src="https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Loading" className='image-card' />
            <div className='signup-cont'>
                <h1 className='signup'>Sign up</h1>
                <label className='signup-label'>Enter your name</label>
                <input 
                    type="text" 
                    className='signup-input'
                    value={name}
                    onChange={handleNameChange}
                />
                <label className='signup-label'>Enter your email id</label>
                <input 
                    type="text" 
                    className='signup-input'
                    value={email}
                    onChange={handleEmailChange}
                />
                <label className='signup-label'>Enter your password</label>
                <input 
                    type="password" 
                    className='signup-input'
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button className='signup-button' onClick={handleSignup}>Sign up</button>
                {message && <p className='signup-message'>{message}</p>}
            </div>
        </div>
    )
}

export default SignUp;
