import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// Credenciais simuladas
const MOCK_CREDENTIALS = {
  usuario: 'admin',
  senha: 'admin123'
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (usuario, senha) => {
    if (usuario === MOCK_CREDENTIALS.usuario && senha === MOCK_CREDENTIALS.senha) {
      setIsAuthenticated(true);
      setUser({ usuario });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};
