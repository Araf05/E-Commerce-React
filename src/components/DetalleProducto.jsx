import React from 'react'
import { useParams } from 'react-router-dom'
import loading from '../assets/load-1110_256.gif'

const DetalleProducto = ({ productos, cargando }) => {
    console.log(productos)

    const { id } = useParams()
    const product = productos.find(producto => producto.id == id)
    console.log(product)

    return (
        <div>
            {
                cargando ? <img src={loading} alt='loading' /> :


                    (product ? (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '15px'
                            }}>
                                <div>
                                    <img src={product.image} alt={product.name}
                                        style={{
                                            width: '200px'
                                        }} />
                                </div>
                                <h2>{product.title}</h2>
                                <p>stock: {product.rating.count}</p>
                                <h3>${product.price}</h3>
                                <button style={{ width: 'fit-content' }}>Agregar</button>
                                <p>{product.description}</p>
                            </div>
                        </>


                    ) : (<p>Producto no encontrado</p>)
                    )
            }

        </div >
    )
}

export default DetalleProducto