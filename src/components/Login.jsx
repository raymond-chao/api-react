import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import '../index.css';

const Login = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
      setError(null);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Login</button>

          {isLoggedIn && <p style={{ color: 'green' }}>Login successful!</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className="register-link">
            <p>
              Don’t have an account?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleForm();
                }}
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
