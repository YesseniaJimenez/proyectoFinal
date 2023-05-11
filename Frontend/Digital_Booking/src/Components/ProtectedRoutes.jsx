import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { ContextLogin } from '../Context/LoginContext'

const ProtectedRoutes = () => {
    const { isLogged } = useContext(ContextLogin)
    return isLogged ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes