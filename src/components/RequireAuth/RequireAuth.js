import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useJwtCookie from '../../hooks/useJwtCookie';

const RequireAuth = ({ user, userId }) => {
  const location = useLocation();

  console.log(user);

  return (
    user || userId
      ? <Outlet />
      : <Navigate to="/login" />
  );
};

export default RequireAuth;
