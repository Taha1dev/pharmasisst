// ContextProvider.js
import { createContext, useContext, useState } from 'react';

// Create a context
const AuthContext = createContext();

// Custom hook to access the context
export function useAuth() {
  return useContext(AuthContext);
}

// Create the context provider component
export function AuthProvider({ children }) {
  const [adminToken, setAdminToken] = useState(null);
  const [moderatorToken, setModeratorToken] = useState(null);

  // Function to set the admin token
  const setAdminAuthToken = (token) => {
    setAdminToken(token);
  };

  // Change setModeratorToken to setModeratorAuthToken
  const setModeratorAuthToken = (token) => {
    setModeratorToken(token);
  };
  // Function to check if the admin token exists
  const isAdminAuthenticated = () => {
    return adminToken !== null;
  };

  // Function to check if the moderator token exists
  const isModeratorAuthenticated = () => {
    return moderatorToken !== null;
  };

  return (
    <AuthContext.Provider
      value={{
        adminToken,
        moderatorToken,
        setAdminAuthToken,
        setModeratorAuthToken,
        isAdminAuthenticated,
        isModeratorAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
