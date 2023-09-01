import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({ }) => {
    if (!localStorage.getItem('accessToken')) {
        return <Navigate to="/login" />;
    }
    return <div><Outlet /></div>;
}

export default ProtectedRoutes