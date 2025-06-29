import React from 'react'
import { Link } from 'react-router-dom'
import './styleEstatico.css'

const AdminHeader = () => {
    return (
        <>
            <header>
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
                </nav>
            </header>
        </>
    )
}

export default AdminHeader