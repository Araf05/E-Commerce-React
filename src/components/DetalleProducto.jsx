import React from 'react'
import { useParams } from 'react-router-dom'

const DetalleProducto = () => {

    const { id } = useParams()
    console.log(id)

    return (
        <div>
            <h1>Detalle de Producto: {id}</h1>

        </div>
    )
}

export default DetalleProducto