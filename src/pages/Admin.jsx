import React, { useState, useEffect } from 'react'

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
                <p>Cargando...</p>
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
                            {/* {form.id ? 'Editar' : 'Crear'} */}
                        </button>
                    </form>
                    <ul>
                        {productos.map((product) => (
                            <li key={product.id}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                />
                                <span>{product.name}</span>
                                <span>{product.price}</span>
                                <div>
                                    <button>Editar</button>
                                    <button>Eliminar</button>
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