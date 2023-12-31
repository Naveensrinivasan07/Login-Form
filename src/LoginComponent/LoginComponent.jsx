import React, { useState } from 'react';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email Id:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <br />
        <label>Enter Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;