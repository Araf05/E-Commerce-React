import React, { useState } from 'react'
import './styleProductos.css'

const Productos = ({ producto, agregarCarrito }) => {

    const [cantidad, setCantidad] = useState(1)

    const increase = () => setCantidad(prev < producto.rating.count ? prev + 1 : prev)
    const decrease = () => setCantidad(prev > producto.rating.count ? prev - 1 : 1)

    return (
        <section className='card'>
            <div className='imagenContainer'>
                <img src={producto.image} alt="" className='imagen' />
            </div>

            <h3 className='nombre' title={producto.title}>{producto.title}</h3>

            <p className='precio'>${producto.price}</p>
            <p className='stock'>{producto.rating.count}</p>

            <div className='cantidadContainer'>
                <button onClick={decrease} className='qtyButton'>-</button>
                <span>{cantidad}</span>
                <button onClick={increase} className='qtyButton'>+</button>
            </div>

            <button onClick={() => agregarCarrito(producto)}>Agregar al carrito</button>
        </section>
    )
}

export default Productos