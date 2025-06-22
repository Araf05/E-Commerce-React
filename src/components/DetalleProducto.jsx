import React from 'react'
import { useParams } from 'react-router-dom'

const DetalleProducto = ({ productos }) => {
    console.log(productos)

    const { id } = useParams()
    const product = productos.find(producto => producto.id == id)
    console.log(product)

    return (
        <div>
            <h1>Detalle de Producto: {id}</h1>
            {product ? (<h2>{product.title}</h2>) : (<p>Producto no encontrado</p>)}
        </div>
    )
}

export default DetalleProducto