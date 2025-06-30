import React, { useState, useContext } from 'react'
import Cart from '../Cart'
import { Link, NavLink } from 'react-router-dom'
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
                    <li><NavLink to='/' className={
                        ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"} >
                        Inicio
                    </NavLink></li>

                    <li><NavLink to='/acercade' className={
                        ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"}>
                        Sobre nosotros</NavLink></li>

                    <li><NavLink to='/productos' className={
                        ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"}>
                        Galeria de productos</NavLink></li>

                    <li><NavLink to='/contacto' className={
                        ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"}>
                        Contacto</NavLink></li>
                </ul>
            </nav>
        </header >
    )
}

export default Header