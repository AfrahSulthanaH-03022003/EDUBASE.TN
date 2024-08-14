import React, { useState } from 'react';
import './ResultsPage.css';

const ResultsPage = () => {
    const [registerNumber, setRegisterNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Register Number:', registerNumber);
        console.log('Password:', password);
    };

    return (
        <div className="results-page-container">
            <h1 className="results-page-title">Check Your Results</h1>
            <form className="results-form" onSubmit={handleSubmit}>
                <div className="results-form-group">
                    <label htmlFor="register-number" className="results-form-label">Register Number:</label>
                    <input
                        type="text"
                        id="register-number"
                        value={registerNumber}
                        onChange={(e) => setRegisterNumber(e.target.value)}
                        className="results-form-input"
                        required
                    />
                </div>
                <div className="results-form-group">
                    <label htmlFor="password" className="results-form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="results-form-input"
                        required
                    />
                </div>
                <button type="submit" className="results-submit-button">Get Results</button>
            </form>
        </div>
    );
};

export default ResultsPage;
