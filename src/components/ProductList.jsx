import React from 'react'
import Productos from './Productos'

const ProductList = ({ productos, agregarCarrito }) => {
    return (
        <>
            <h2>Galería de productos</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-evenly' }}>
                {
                    productos.map(producto => (
                        <Productos key={producto.id} producto={producto} agregarCarrito={agregarCarrito} />
                    ))
                }
            </div>
        </>
    )
}

export default ProductList