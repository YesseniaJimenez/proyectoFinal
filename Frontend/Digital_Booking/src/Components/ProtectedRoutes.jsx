import React from 'react'
import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {
    const isLogged = false
    return isLogged ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes