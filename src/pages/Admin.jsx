import React, { useState, useEffect } from 'react'
import cargando from '../assets/load-1110_256.gif'

const Admin = () => {
    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('./data/data.json')
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProducts(data)
                    setLoading(false)
                }, 2000)
            })
            .catch((error) => {
                console.error('Error fetching data: ', error)
                setError(true)
                setLoading(false)
            })
    }, [])

    return (
        <div >
            {loading ? (
                <img src={cargando} alt='loading' />
            ) : (
                <>
                    <nav>
                        <ul>
                            <li>
                                <button>
                                    <i className='fa-solid fa-right-from-bracket'></i>
                                </button>
                            </li>
                            <li>
                                <a href="/login">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <h1>Dashboard Administrativo</h1>
                    <form>
                        <input
                            type='text'
                            name='name'
                            placeholder='Nombre del Producto'
                            required
                        />
                        <input
                            type='number'
                            name='price'
                            placeholder='Precio del Producto'
                            required
                        />
                        <button type='submit'>
                            Editar
                            {/* {form.id ? 'Editar' : 'Crear'} */}
                        </button>
                    </form>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        gap: '30px',
                        justifyContent: 'space-evenly'
                    }}>
                        {productos.map((product) => (
                            <li key={product.id}
                                //className='card'
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: '100%',
                                    minHeight: '100px',
                                    alignItems: 'center',
                                    border: '1px solid black',
                                    justifyContent: 'space-between',
                                    padding: '15px'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    minWidth: '300px',
                                    height: '100px',
                                    justifyContent: 'space-evenly',
                                    border: '1px solid black'
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            width: '100%',
                                            maxHeight: '90px',
                                            objectFit: 'contain',
                                            margin: 'auto',
                                            border: '1px solid red'
                                        }}
                                    />
                                </div>
                                <span className='nombre' style={{ margin: 'auto', width: '300px' }}>{product.name}</span>
                                <span className='precio' style={{ margin: 'auto' }}>${product.price}</span>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '200px',
                                    padding: '5px',
                                    alignItems: 'center',
                                    margin: 'auto',
                                    border: '1px solid green'
                                }}>
                                    <button style={{ fontSize: '12px', width: '100px' }}>Editar</button>
                                    <button style={{ fontSize: '12px', width: '100px' }}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                </>
            )}

        </div>
    )
}

export default Admin