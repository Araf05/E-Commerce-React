import React, { useState } from 'react'
import './styleProductos.css'
import { Link } from 'react-router-dom'

const Productos = ({ producto, agregarCarrito }) => {

    const [cantidad, setCantidad] = useState(1)

    const increase = () => setCantidad(prev < producto.rating.count ? prev + 1 : prev)
    const decrease = () => setCantidad(prev > producto.rating.count ? prev - 1 : 1)

    return (
        <section className='card'>
            <div className='imagenContainer'>
                <img src={producto.image} alt="" className='imagen' />
            </div>

            <h3 className='nombre' title={producto.name}>{producto.name}</h3>

            <p className='precio'>${producto.price}</p>
            <p className='stock'>{producto.stock}</p>

            <div className='cantidadContainer'>
                <button onClick={decrease} className='qtyButton'>-</button>
                <span>{cantidad}</span>
                <button onClick={increase} className='qtyButton'>+</button>
            </div>

            <button onClick={() => agregarCarrito(producto)}>Agregar al carrito</button>

            <Link to={`/productos/${producto.id}`} >Ver más</Link>

        </section>
    )
}

export default Productos