import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { setIsAuth } = useContext(CartContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let validationErrors = {}
        if (!email) validationErrors.email = 'El email es requerido'
        if (!password) validationErrors.password = 'La contraseña es requerida'

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors)
        }
        return
    }

    try {

        const res = await fetch('data/users.json')
        const users = await res.json()

        const foundUser = users.find((user) => user.email === email && user.password === password)

        if (!foundUser) {
            setError({ email: 'credenciales invalidas' })
        } else {
            if (foundUser.role === 'admin') {
                setIsAuth(true)
                navigate('/admin')
            } else {
                navigate('/')
            }
        }

    } catch (err) {
        setError({ email: 'Algo salió mal. Por favor, intentalo más tarde.' })
    }

    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default Login