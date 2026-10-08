import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../styles/PublicLayout.module.css';

const PublicLayout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
