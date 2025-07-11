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
                                flexDirection: 'row',
                                padding: '15px',
                                gap: '15px'
                            }}>
                                <div style={{
                                    width: '300px',
                                    height: '400px',
                                    border: '1px solid black'
                                }}>
                                    <img src={product.image} alt={product.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }} />
                                </div>
                                <div style={{ width: '100%' }}>
                                    <h2>{product.name}</h2>
                                    <hr />
                                    <p>Stock: {product.stock}</p>
                                    <p>Marca: {product.brand}</p>
                                    <h3>${product.price}</h3>
                                    <p>Disponible para:</p>
                                    <label>
                                        <input type="radio" name='checkEnvio' value='domicilio' />
                                        🛻Envío a domicilio
                                    </label>
                                    <label>
                                        <input type="radio" name='checkEnvio' value='local' />
                                        🏪Retiro en el local
                                    </label>
                                    <button style={{ width: 'fit-content' }}>Agregar</button>
                                    <p>Descripción del producto:</p>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </>


                    ) : (<p>Producto no encontrado</p>)
                    )
            }

        </div >
    )
}

export default DetalleProducto