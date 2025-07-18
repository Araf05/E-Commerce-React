import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function RutasProtegidas({ children }) {

    // if (!isAuthenticated) {
    //     return <Navigate to="/login" replace />
    // }

    const { isAuthenticated, role } = useAuth()

    // Si no está autenticado, redirigir al login
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    // Si está autenticado pero no es admin, redirigir al home
    if (role !== 'admin') {
        return <Navigate to="/" />
    }

    return children
}

export default RutasProtegidas