import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../Styles/Empleados.module.css';

const EmpleadosPage = () => {
  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);
  const [formData, setFormData] = useState({ nombre: '', cargo: '', email: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const response = await axios.get('http://localhost:5000/empleados');
        setEmpleados(response.data);
      } catch (err) {
        setError('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchEmpleados();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedEmpleado) {
      try {
        await axios.put(`http://localhost:5000/empleados/${selectedEmpleado.id}`, formData);
        const updatedEmpleados = empleados.map(emp =>
          emp.id === selectedEmpleado.id ? { ...emp, ...formData } : emp
        );
        setEmpleados(updatedEmpleados);
        setSelectedEmpleado(null);
        setFormData({ nombre: '', cargo: '', email: '' });
      } catch (err) {
        setError('Error al modificar el empleado');
      }
    } else {
      try {
        await axios.post('http://localhost:5000/empleados', formData);
        const response = await axios.get('http://localhost:5000/empleados');
        setEmpleados(response.data);
        setFormData({ nombre: '', cargo: '', email: '' });
      } catch (err) {
        setError('Error al agregar el empleado');
      }
    }
  };

  const handleEdit = (empleado) => {
    setSelectedEmpleado(empleado);
    setFormData({ nombre: empleado.nombre, cargo: empleado.cargo, email: empleado.email });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/empleados/${id}`);
      setEmpleados(empleados.filter(emp => emp.id !== id));
    } catch (err) {
      setError('Error al eliminar el empleado');
    }
  };

  const filteredEmpleados = empleados.filter(emp =>
    emp.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Empleados</h2>
      <input
        type="text"
        placeholder="Buscar empleado"
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          required
          className={styles.formInput}
        />
        <input
          type="text"
          name="cargo"
          placeholder="Cargo"
          value={formData.cargo}
          onChange={handleInputChange}
          required
          className={styles.formInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className={styles.formInput}
        />
        <button type="submit" className={styles.formButton}>
          {selectedEmpleado ? 'Modificar' : 'Agregar'}
        </button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cargo</th>
            <th>Email</th>
            <th>Acciones</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmpleados.length === 0 ? (
            <tr>
              <td colSpan="6">No hay empleados para mostrar</td> 
            </tr>
          ) : (
            filteredEmpleados.map((empleado) => (
              <tr key={empleado.id}>
                <td>{empleado.id}</td>
                <td>{empleado.nombre}</td>
                <td>{empleado.cargo}</td>
                <td>{empleado.email}</td>
                <td className={styles.actions}>
                  <button onClick={() => handleEdit(empleado)}>Editar</button>
                  <button onClick={() => handleDelete(empleado.id)}>Eliminar</button>
                </td>
                <td>
                  <Link to={`/empleado/${empleado.id}`} className={styles.detailLink}>
                    Ver detalles
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmpleadosPage;
