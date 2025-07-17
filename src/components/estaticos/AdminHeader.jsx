import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './styleEstatico.css'

const AdminHeader = () => {
    return (
        <>
            <header>
                <nav className="hRow navbar navbar-expand-lg  bg-body-tertiary">
                    <div>
                        <ul style={{ width: '100vw', height: '8vh' }}>
                            <li className='navbanner'>
                                <Link to='/' className='link'>
                                    <h3>Shop</h3>
                                </Link>
                            </li>
                            <li>
                                <button>
                                    <i className='fa-solid fa-right-from-bracket'></i>
                                </button>
                            </li>
                            <li>
                                <Link to='/login' className='link'>
                                    <i className="fa-solid fa-user"></i>
                                </Link>
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
                            <li className="nav-item"><NavLink to='/admin' className={
                                ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"} >
                                Panel Control
                            </NavLink></li>

                            <li className="nav-item"><NavLink to='/admin' className={
                                ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"}>
                                Reportes</NavLink></li>

                            <li className="nav-item"><NavLink to='/admin' className={
                                ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "link"}>
                                sucursales</NavLink></li>
                        </ul>
                    </nav>
                </nav>

                {/* 





                <div className='hRow'>
                    <ul>
                        <li>
                            <button>
                                <i className='fa-solid fa-right-from-bracket'></i>
                            </button>
                        </li>
                        <li style={{ textAlign: 'center' }}>
                            <Link to='/login' className='link'>
                                <i class="fa-solid fa-user"></i>
                                <p style={{ fontSize: '.5rem', color: 'grey' }}>Admin</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/Admin' className='link'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='' className='link'>
                                Reportes
                            </Link>
                        </li>
                    </ul>
                </nav>*/}
            </header>
        </>
    )
}

export default AdminHeader