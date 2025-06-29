import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import login from '../assets/login.png'

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
            return
        }

        try {
            const res = await fetch('https://6861b8d996f0cc4e34b75009.mockapi.io/store/users')
            const users = await res.json()

            const foundUser = users.find(
                (user) => user.email === email && user.password === password
            )



            if (!foundUser) {
                setError({ email: 'Las credenciales son invalidas', password: 'Las credenciales son invalidas' })
            } else {
                if (foundUser.role === 'admin') {
                    setIsAuth(true)
                    navigate('/admin')
                } else {
                    navigate('/')
                }
            }

        } catch (err) {
            console.log("setIsAuth:", setIsAuth)
            setError({ email: 'Algo salió mal. Por favor, intentalo más tarde.' })
        }
    }


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={login} alt="login" style={{ width: '200px' }} />
            </div>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    maxWidth: '400px',
                    margin: 'auto'
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="formEmail" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        Email address
                    </label>
                    <input
                        id='formEmail'
                        type="email"
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            border: `1px solid ${error.email ? 'red' : '#ced4da'}`,
                            borderRadius: '0.25rem'
                        }}
                    />
                    {error.email && (
                        <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                            {error.email}
                        </div>
                    )}

                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="formPassword" style={{ marginBottom: '.5rem', fontWeight: 'bold' }}>
                        Password
                    </label>
                    <input
                        id='formPassword'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            border: `1px solid ${error.password ? 'red' : '#ced4da'}`,
                            borderRadius: '0.25rem'
                        }}
                    />
                    {error.password && (
                        <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                            {error.password}
                        </div>
                    )}
                </div>

                <button
                    type='submit'
                    style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '0.75rem',
                        border: 'none',
                        borderRadius: '0.25rem',
                        cursor: 'pointer',
                        fontSize: '1.rem'
                    }}
                >
                    Submit
                </button>

            </form>
        </>
    )
}

export default Login