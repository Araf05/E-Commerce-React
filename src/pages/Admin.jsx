import React, { useState, useEffect } from 'react'
import AdminHeader from '../components/estaticos/AdminHeader'
import cargando from '../assets/load-1110_256.gif'
import FormularioProducto from '../components/FormularioProducto'

const Admin = () => {
    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetch('https://6861b8d996f0cc4e34b75009.mockapi.io/store/products')
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

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch('https://6861b8d996f0cc4e34b75009.mockapi.io/store/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) {
                throw new Error('Error al agregar producto')
            }
            const data = await respuesta.json()
            console.log(data)
            console.log({ producto })
            alert('Producto agregado correctamente')
        } catch (error) {
            console.log(error.message)
        }
        console.log({ productos })
    }

    return (
        <div >
            {loading ? (
                <img src={cargando} alt='loading' />
            ) : (
                <>
                    <AdminHeader />
                    <h1>Dashboard Administrativo</h1>
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
                    <button onClick={() => setOpen(true)}>Agregar nuevo producto</button>
                    {open && (<FormularioProducto onAgregar={agregarProducto} />)}

                </>

            )}

        </div>
    )
}

export default Admin