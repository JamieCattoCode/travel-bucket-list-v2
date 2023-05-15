import React from "react";
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useJwtCookie from "../../hooks/useJwtCookie";

const RequireAuth = () => {
    const location = useLocation();

    const { token, user } = useJwtCookie('userToken');

    if (!(token && user)) return <Outlet />
    else return <Navigate to="login" state={{ from: location }} replace />
}

export default RequireAuth;