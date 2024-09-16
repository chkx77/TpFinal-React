import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../Styles/HomePage.module.css';

const HomePage = () => {
  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const response = await axios.get('http://localhost:5000/empleados');
        setEmpleados(response.data);
      } catch (err) {
        setError('Error al cargar los datos de empleados');
      } finally {
        setLoading(false);
      }
    };

    fetchEmpleados();
  }, []);

  const totalEmpleados = empleados.length;
  const ultimoEmpleado = empleados[empleados.length - 1];

  if (loading) return <p>Cargando métricas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bienvenido a la Aplicación de Empleados</h1>
        <p className={styles.subtitle}>Gestione sus empleados de manera eficiente</p>
      </header>

      <section className={styles.info}>
        <h2 className={styles.sectionTitle}>¿Cómo Funciona el Sistema?</h2>
        <div className={styles.infoContent}>
          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>1. Inicio de Sesión</h3>
            <p className={styles.cardText}>
              Inicie sesión con las credenciales proporcionadas para acceder a la
              aplicación. Solo los usuarios autenticados podrán ver y modificar
              los datos de los empleados.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>2. Gestión de Empleados</h3>
            <p className={styles.cardText}>
              Una vez autenticado, podrá agregar, editar, eliminar y buscar
              empleados en el sistema.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>3. Navegación</h3>
            <p className={styles.cardText}>
              Use el menú de navegación para acceder a la página principal y a
              la sección de empleados.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.metrics}>
        <h2 className={styles.sectionTitle}>Métricas de Empleados</h2>
        <div className={styles.metricsContent}>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>Total de Empleados</h3>
            <p className={styles.metricNumber}>{totalEmpleados}</p>
          </div>
          {ultimoEmpleado && (
            <div className={styles.metricBox}>
              <h3 className={styles.metricTitle}>Último Empleado Agregado</h3>
              <p className={styles.metricDetail}>
                {ultimoEmpleado.nombre} - {ultimoEmpleado.cargo}
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Trabajo Práctico Final de React - Romero Matías</p>
      </footer>
    </div>
  );
};

export default HomePage;
