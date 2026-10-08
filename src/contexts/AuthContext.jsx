import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('demo-session') === 'admin');

  const login = (token) => {
    if (token === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('demo-session', token);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('demo-session');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
