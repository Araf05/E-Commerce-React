import { createContext, useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const [isAuthenticated, setIsAuth] = useState(false)
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
        < AuthContext.Provider value={{ email, setEmail, password, setPassword, handleSubmit, error, isAuthenticated, setIsAuth }}>
            {children}
        </AuthContext.Provider >
    )
}

export const useAuth = () => useContext(AuthContext)