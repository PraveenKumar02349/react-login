import React, { useState } from 'react';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to submit the form data goes here
    setIsLoading(true);
    // make API call here
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Navigate to the product page on successful login
          return response.json();
        }
        throw new Error('Invalid login credentials');
      })
      .then((data) => {
        console.log(data); // replace with your own logic
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('hi' - error);
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      {error && <div>{error}</div>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Log in'}
      </button>
    </form>
  );
}
export default Login;
