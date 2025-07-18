import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import login from '../assets/login.png'

const Login = () => {
    const { email, setEmail, password, setPassword, handleSubmit, error } = useAuth()

    useEffect(() => {
        setEmail('')
        setPassword('')
    }, [])

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