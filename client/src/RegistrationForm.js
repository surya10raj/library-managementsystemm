import React, { useState } from 'react';
import "./Registration.css"
function RegistrationForm({ handleRegistration }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setError('Please fill out both username and password fields.');
      return;
    }

    setError('');
    handleRegistration(username, password);

    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
