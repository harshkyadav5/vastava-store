import React, { useState } from 'react';
import './SignIn.css';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Error logging in:', err);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2> 

      <form onSubmit={handleSubmit}> 

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      <button type="submit">Sign In</button> 

      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default SignIn;
