import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>GESTION DE EMPLEADOS</span>
      </div>
      <div className={styles.navLinks}>
        <Link to="/home"><i className="fas fa-home"></i>Main</Link>
        <Link to="/empleados"><i className="fas fa-users"></i>Empleados</Link>
      </div>
      <Link to="/login" onClick={logout} className={styles.logoutButton}><i className="fas fa-sign-out-alt"></i>Cerrar sesión</Link>
    </nav>
  );
};

export default Navbar;
