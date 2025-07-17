import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'
import notFound from '../assets/result-no-found.png'

const ProductList = () => {
    const { productos, busqueda, productosFiltrados, setBusqueda } = useContext(CartContext)

    console.log(busqueda);


    return (
        <>
            <h2>Galería de productos</h2>
            <input
                type="text"
                placeholder='Buscar productos'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />

            {productosFiltrados.length === 0 ? (
                <div style={{ textAlign: 'center' }}>
                    <img
                        src={notFound}
                        alt="No se encontraron productos"
                        style={{ width: '250px' }}
                    />
                    <p>No se encontraron productos con esa búsqueda.</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-evenly' }}>
                    {
                        productosFiltrados.map(producto => (
                            <Productos key={producto.id} producto={producto} />
                        ))
                    }
                </div>
            )
            }
        </>
    )
}

export default ProductList