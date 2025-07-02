import React, { useState, useContext } from 'react'
import './styleProductos.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Productos = ({ producto }) => {
    const { handleAddToCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const increase = () => setCantidad(cantidad < producto.stock ? cantidad + 1 : cantidad)
    const decrease = () => setCantidad(cantidad > 1 ? cantidad - 1 : 1)

    return (
        <section className='card'>
            <div className='imagenContainer'>
                <img src={producto.image} alt="" className='imagen' />
            </div>

            <h3 className='nombre' title={producto.name}>{producto.name}</h3>

            <p className='precio'>${producto.price}</p>
            <p className='stock'>stock disponible: {producto.stock}</p>

            <div className='cantidadContainer'>
                <button onClick={decrease} className='qtyButton'>-</button>
                <span>{cantidad}</span>
                <button onClick={increase} className='qtyButton'>+</button>
            </div>

            <button onClick={() => handleAddToCart(producto)} disabled={producto.stock <= 0}>Agregar al carrito</button>

            <Link to={`/productos/${producto.id}`} >Ver más</Link>

        </section>
    )
}

export default Productos