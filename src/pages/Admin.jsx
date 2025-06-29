import React, { useState, useEffect } from 'react'
import AdminHeader from '../components/estaticos/AdminHeader'
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
                    <AdminHeader />
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
                        flexWrap: 'wrap',
                        gap: '15px',
                        justifyContent: 'space-evenly',
                        padding: '0'
                    }}>
                        {productos.map((product) => (
                            <li key={product.id}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '200px',
                                    minHeight: '200px',
                                    alignItems: 'center',
                                    border: '1px solid grey',
                                    justifyContent: 'space-between',
                                    padding: '15px'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    minWidth: '100px',
                                    height: '100px',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            width: '100px',
                                            maxHeight: '90px',
                                            objectFit: 'contain',
                                            margin: 'auto'
                                        }}
                                    />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    justifyContent: 'center'
                                }}>
                                    <span className='nombre' style={{ margin: 'auto', width: '100%', fontWeight: 'bold' }}>{product.name}</span>
                                    <span className='precio' style={{ margin: 'auto' }}>${product.price}</span>
                                    <div style={{
                                        display: 'flex',
                                        width: '100%',
                                        padding: '5px',
                                        justifyContent: 'center',
                                        margin: 'auto',
                                        gap: '10px'
                                    }}>
                                        <button style={{ fontSize: '12px', width: '80px', backgroundColor: 'grey', color: 'white' }}>Editar</button>
                                        <button style={{ fontSize: '12px', width: '80px', backgroundColor: 'red', color: 'white' }}>Eliminar</button>
                                    </div>
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