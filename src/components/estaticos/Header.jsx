import React, { useState } from 'react'
import Cart from '../Cart'
import { Link } from 'react-router-dom'
import './styleEstatico.css'

const Header = ({ cartItems, quitarCarrito }) => {
    const [isCartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/' className='link'>Inicio</Link></li>
                    <li><Link to='/acercade' className='link'>Sobre nosotros</Link></li>
                    <li><Link to='/productos' className='link'>Galeria de productos</Link></li>
                    <li><Link to='/contacto' className='link'>Contacto</Link></li>
                    <li className='cartnav'>
                        <button className='btnCart' onClick={() => setCartOpen(true)}>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                        <Cart quitarCarrito={quitarCarrito} cartItems={cartItems} isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
                    </li>
                    <li>
                        <Link to='/login' className='link'>
                            <i class="fa-solid fa-user"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header