import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../Styles/EmpleadoDetalle.module.css';
import empleadoImage from '../Assets/empleado.png'; 

const EmpleadoDetailPage = () => {
  const { id } = useParams();
  const [empleado, setEmpleado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/empleados/${id}`);
        setEmpleado(response.data);
      } catch (err) {
        setError('Error al cargar los datos del empleado');
      } finally {
        setLoading(false);
      }
    };

    fetchEmpleado();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.legajo}>
        <img src={empleadoImage} alt="Empleado" className={styles.image} />
        <h1 className={styles.title}>Legajo del Empleado</h1>
        {empleado ? (
          <div className={styles.details}>
            <h2 className={styles.employeeName}>{empleado.nombre}</h2>
            <p><strong>Cargo:</strong> {empleado.cargo}</p>
            <p><strong>Email:</strong> {empleado.email}</p>
            <p><strong>ID del Empleado:</strong> {empleado.id}</p>
          </div>
        ) : (
          <p>No se encontró el empleado</p>
        )}
      </div>
      <button className={styles.backButton} onClick={() => navigate('/empleados')}>
        Volver a Empleados
      </button>
    </div>
  );
};

export default EmpleadoDetailPage;
