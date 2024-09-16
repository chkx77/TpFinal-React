import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext';
import Navbar from './Components/Navbar';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import EmpleadosPage from './pages/EmpleadosPage';
import EmpleadoDetailPage from './Pages/EmpleadoDetalle';
import PrivateRoute from './Components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<><Navbar /><HomePage /></>} />
            <Route path="/home" element={<><Navbar /><HomePage /></>} />
            <Route path="/empleados" element={<><Navbar /><EmpleadosPage /></>} />
            <Route path="/empleado/:id" element={<><Navbar /><EmpleadoDetailPage /></>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
