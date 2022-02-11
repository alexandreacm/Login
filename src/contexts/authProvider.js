import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user] = useState({
    name: 'alexandre.marques',
  });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
