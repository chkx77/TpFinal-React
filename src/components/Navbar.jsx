import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Navbar.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>GESTION DE EMPLEADOS</span>
      </div>
      <div className={styles.navLinks}>
        <Link to="/home"><i className="fas fa-home"></i>Main</Link>
        <Link to="/empleados"><i className="fas fa-users"></i>Empleados</Link>
      </div>
      <Link to="/login" className={styles.logoutButton}><i className="fas fa-sign-out-alt"></i>Log Out</Link>
    </nav>
  );
};

export default Navbar;
