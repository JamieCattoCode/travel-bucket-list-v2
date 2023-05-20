import React, { createContext, useState, useEffect, useMemo } from 'react';
import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

import getUserById from '../requests/getUserById';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const setUserFromToken = async () => {
      const userToken = Cookie.get('userToken');
      if (userToken) {
        const { userId } = (jwtDecode(userToken));
        setUserId(userId);
        setUser(await getUserById(userId));
      }
    };
    setUserFromToken();
    setAuthChecked(true);
  }, []);

  //   const authContextValue = useMemo(() => ({ user, userId, authChecked }), [
  //     user,
  //     userId,
  //   ]);

  return (
    <AuthContext.Provider value={{ user, userId, authChecked }}>
      {children}
    </AuthContext.Provider>
  );
};
