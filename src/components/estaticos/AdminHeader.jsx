import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './styleEstatico.css'
import { useAuth } from '../../context/AuthContext'

const AdminHeader = () => {
    const { isAuthenticated, logout } = useAuth()

    return (
        <>
            <header>
                <nav className="hRow navbar navbar-expand-lg  bg-body-tertiary">
                    <div>
                        <ul style={{ width: '100vw', height: '8vh' }}>
                            <li className='navbrand'>
                                <Link to='/admin' className='link'>
                                    <h3>Shop</h3>
                                </Link>
                            </li>
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
                            <li>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <nav className="collapse navbar-collapse colapsable" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink to='/admin' className={
                                ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"} >
                                Panel Control
                            </NavLink></li>
                        </ul>
                    </nav>
                </nav>
            </header>
        </>
    )
}

export default AdminHeader