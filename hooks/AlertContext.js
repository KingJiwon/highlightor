'use client';

import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();
export const useAlert = () => useContext(AlertContext);

export default function AuthProvider({ children }) {
  const [message, setMessage] = useState('');

  return (
    <AlertContext.Provider
      value={{
        message,
        setMessage,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
