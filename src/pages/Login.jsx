import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { setIsAuth } = useContext(CartContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const navigate = useNavigate()

    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default Login