import { useState, useMemo } from 'react';
import React from 'react';

export const stateContext = React.createContext({
  user: null,
  setUser: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const contextValue = useMemo(() => {
    return {
      user,
      token,
      setUser,
      setToken,
    };
  }, [user, token]);

  return (
    <stateContext.Provider value={contextValue}>
      {children}
    </stateContext.Provider>
  );
};
