import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import styles from '../Styles/LoginPage.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      login('admin');
      navigate('/home');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.logo}>
          <i className="fas fa-user-circle"></i>
          <h1>Iniciar Sesión</h1>
        </div>
        <p className={styles.description}>Ingrese sus credenciales para acceder al sistema.</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <i className={`fas fa-user ${styles.icon}`}></i>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuario"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <i className={`fas fa-lock ${styles.icon}`}></i>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
