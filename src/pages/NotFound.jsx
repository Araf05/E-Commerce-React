import React from 'react'
import { Link } from 'react-router-dom'
import Error404 from '../assets/error-404-not-found.svg'


const NotFound = () => {
    return (
        <div>
            <h1>Oops! página no encontrada...</h1>
            <img
                src={Error404}
                alt="Error 404 not found"
                style={{
                    width: '350px'
                }} />
            <button><Link to='/'>Volver al inicio</Link></button>
        </div>
    )
}

export default NotFound