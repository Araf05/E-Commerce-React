import React, { useState, useContext } from 'react'
import Cart from '../Cart'
import { Link } from 'react-router-dom'
import './styleEstatico.css'
import { CartContext } from '../../context/CartContext'

const Header = () => {
    const [isCartOpen, setCartOpen] = useState(false)

    const { cart, cargando, productos, error, isAuthenticated, handleAddToCart, handleDeleteFromCart } = useContext(CartContext)

    return (
        <header>
            <div className='hRow' >
                <ul>
                    <li className='cartnav'>
                        <button className='btnCart' onClick={() => setCartOpen(true)}>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                        <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
                    </li>
                    <li>
                        <Link to='/login' className='link'>
                            <i class="fa-solid fa-user"></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <nav>
                <ul>
                    <li><Link to='/' className='link'>Inicio</Link></li>
                    <li><Link to='/acercade' className='link'>Sobre nosotros</Link></li>
                    <li><Link to='/productos' className='link'>Galeria de productos</Link></li>
                    <li><Link to='/contacto' className='link'>Contacto</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header