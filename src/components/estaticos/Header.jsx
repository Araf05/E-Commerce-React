import React, { useState, useContext } from 'react'
import Cart from '../Cart'
import { Link, NavLink } from 'react-router-dom'
import './styleEstatico.css'
import { CartContext } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'


const Header = () => {
    const [isCartOpen, setCartOpen] = useState(false)
    const { cart } = useContext(CartContext)
    const { isAuthenticated, logout } = useAuth()

    return (
        <header>
            <nav className="hRow navbar navbar-expand-lg  bg-body-tertiary">
                <div>
                    <ul style={{ width: '100vw', height: '8vh' }}>
                        <li className='navbrand'>
                            <Link to='/' className='link'>
                                <h3>Shop</h3>
                            </Link>
                        </li>
                        <li className='cartnav'>
                            <button className='btnCart' onClick={() => setCartOpen(true)}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span>{cart.length}</span>
                            </button>
                            <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
                        </li>

                        <li>

                            {
                                isAuthenticated ? (
                                    <button className='link' onClick={logout} style={{ background: 'none', border: 'none' }}>
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </button>
                                ) : (
                                    <Link to='/login' className='link'>
                                        <i className="fa-solid fa-user"></i>
                                    </Link>
                                )
                            }
                            {/* <Link to='/login' className='link'>
                                <i className="fa-solid fa-user"></i>
                            </Link> */}
                        </li>
                        <li>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </li>
                    </ul>
                </div>

                <nav className="collapse navbar-collapse colapsable" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink to='/' className={
                            ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"} >
                            Inicio
                        </NavLink></li>

                        <li className="nav-item"><NavLink to='/acercade' className={
                            ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"}>
                            Sobre nosotros</NavLink></li>

                        <li className="nav-item"><NavLink to='/productos' className={
                            ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"}>
                            Galeria de productos</NavLink></li>

                        <li className="nav-item"><NavLink to='/contacto' className={
                            ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"}>
                            Contacto</NavLink></li>
                    </ul>
                </nav>
            </nav>

        </header >
    )
}

export default Header