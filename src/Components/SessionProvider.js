import React, { createContext, useContext } from 'react';
import { useUserSession } from './UseUserSession';

const SessionContext = createContext({ session: null, loading: true, user: null });

export const SessionProvider = ({ children }) => {
  const sessionData = useUserSession();

  return (
    <SessionContext.Provider value={sessionData}>
      {children}
    </SessionContext.Provider>
  );
};

// Petit raccourci pour utiliser le contexte plus facilement ailleurs
export const useSession = () => useContext(SessionContext);