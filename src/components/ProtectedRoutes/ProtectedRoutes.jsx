import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({ }) => {
    if (!localStorage.getItem('accessToken')) {
        return <Navigate to="/login" />;
    }
    return <div><Outlet /></div>;
};

export default ProtectedRoutes