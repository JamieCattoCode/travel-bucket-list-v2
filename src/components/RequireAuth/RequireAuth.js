import React, { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

const RequireAuth = () => {
  const { user, userId, authChecked } = useContext(AuthContext);

  const location = useLocation();

  console.log(user);

  if (!authChecked) {
    return (
      <h2>
        Loading...
      </h2>
    );
  }

  return (
    user || userId
      ? <Outlet />
      : <Navigate to="/login" />
  );
};

export default RequireAuth;
