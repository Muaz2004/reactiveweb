import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageLayout.css';

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // 🔓 Clear tokens
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    // 🔁 Redirect to login or home
    setTimeout(() => {
       navigate('/login');
       window.location.reload();
       }, 2000);
  }, []);

  return <div className="logout-message">Logged out You can login again using login link...</div>;
}
