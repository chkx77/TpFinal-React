import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import styles from '../Styles/PrivateLayout.module.css';

const PrivateLayout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
