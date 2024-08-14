import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const StudentLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmitSignin = async () => {
        try {
            const response = await axios.post('http://localhost:9001/Fitfreak/login', {
                email,
                password
            });
    
            if (response.status === 200) {
                // Handle successful login based on user role
                if (email.endsWith('.stu@gmail.com')) {
                    navigate('/LandingPage');
                } else if (email.endsWith('.stf@gmail.com')) {
                    navigate('/TeacherPage');
                } else if (email.endsWith('.admin@gmail.com')) {
                    navigate('/Admin');
                } else {
                    setMessage('Invalid email or password');
                }
            } else {
                setMessage('Invalid email or password');
            }
        } catch (error) {
            let errorMessage = 'An error occurred';
            if (error.response) {
                // Server responded with a status other than 200
                errorMessage = error.response.data || 'Server error';
            } else if (error.request) {
                // No response received from the server
                errorMessage = 'No response received from the server';
            } else {
                // Other errors
                errorMessage = error.message;
            }
            setMessage(errorMessage);
        }
    };
    

    return (
        <div style={{ height: '100vh' }}>
            <div className="login-container">
                <div className="image-container">
                    <img
                        src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Loading"
                        className="img circle-image"
                    />
                </div>

                <div className="elements-container">
                    <label className="labels">Email</label>
                    <br />
                    <input
                        type="text"
                        className="input"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <br />
                    <label className="labels">Password</label>
                    <br />
                    <input
                        type="password"
                        className="input"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <br />
                    <button className="login" onClick={handleSubmitSignin}>
                        Login
                    </button>
                    <br />
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;