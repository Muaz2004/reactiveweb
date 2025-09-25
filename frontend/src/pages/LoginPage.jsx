import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import './PageLayout.css';


function LoginPage() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Message, setMessage] = useState('');
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: Username,
        password: Password,
      }),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Login failed');
        }
        return res.json();
      })
      .then(data => {
        // store token locally (optional)
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        console.log(data)
        setMessage('Login successful!');
        
         
        setUsername('');
        setPassword('');
        setTimeout(() => {
        navigate('/');
            window.location.reload();
                }, 2000);
      })
      .catch(error => {
        setMessage('Invalid username or password');
        console.error(error);
      });
  };

  return (
    <>
   
    <div className="auth-container">
    <h2 className="auth-title">Welcome Back</h2>
    <p className="auth-subtext">Please log in to continue</p>

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>

      {Message && <div className="success-message">{Message}</div>}   
    
    <div className="register-link">
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  </div>

      
    </>
  );
}

export default LoginPage;
