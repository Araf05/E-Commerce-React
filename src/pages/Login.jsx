import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { setIsAuth } = useContext(CartContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let validationErrors = {}
        if (!email) validationErrors.email = 'El email es requerido'
        if (!password) validationErrors.password = 'La contraseña es requerida'

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors)
        }
        return
    }

    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default Login