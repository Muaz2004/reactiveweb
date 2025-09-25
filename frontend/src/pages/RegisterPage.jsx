import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageLayout.css';
function RegisterPage() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [SMessage, setSMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: Username,  // ✅ Corrected
        password: Password,  // ✅ Corrected
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSMessage(`Thank you, ${Username}, registration successful! You can now log in.`);
        setTimeout(() => setSMessage(''), 10000);
        setUsername('');
        setPassword('');
        setTimeout(() => {
        navigate('/login');
           window.location.reload();
            }, 3000);
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <>
    
      <div className="auth-container">
    <h2 className="auth-title">Create an Account</h2>
    <p className="auth-subtext">Join us today. It takes only a minute!</p>
      <form onSubmit={handleSubmit} className="registration-form">
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
        <button type="submit">Register</button>
      </form>

      {SMessage && <div className="success-message">{SMessage}</div>}  </div>
    </>
  );
}

export default RegisterPage;
