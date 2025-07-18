import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import cartLoading from '../assets/shopping-cart.webm'
import { CartContext } from '../context/CartContext'


const DetalleProducto = ({ productos, cargando }) => {
    const { handleAddToCart } = useContext(CartContext)

    console.log(productos)

    const { id } = useParams()
    const product = productos.find(producto => producto.id == id)
    console.log(product)

    return (
        <div>
            {
                cargando ?
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                        <video autoPlay loop muted playsInline>
                            <source
                                src={cartLoading} type='video/webm'
                            />
                        </video>
                        <h3>Cargando...</h3>
                    </div>
                    :


                    (product ? (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                padding: '15px',
                                gap: '15px',
                                width: '100%'
                            }}>
                                <div style={{
                                    width: '80vw',
                                    height: '400px',
                                    // border: '1px solid black'
                                }}>
                                    <img src={product.image} alt={product.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '600px',
                                            objectFit: 'cover'
                                        }} />
                                </div>
                                <div style={{ width: '100%' }}>
                                    <p>Marca: {product.brand}</p>
                                    <h2>{product.name}</h2>
                                    <p style={{ color: 'grey', fontSize: '.8rem' }}>Item No. ITM-{product.id}</p>
                                    <h3 style={{ color: 'red' }}>${product.price}</h3>
                                    <hr />
                                    <p style={{ margin: '0' }}>Disponible para:</p>
                                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                        <label>
                                            <input type="radio" name='checkEnvio' value='domicilio' />
                                            🛻Envío a domicilio
                                        </label>
                                        <label>
                                            <input type="radio" name='checkEnvio' value='local' />
                                            🏪Retiro en el local
                                        </label>
                                    </div>
                                    <hr />
                                    <button
                                        className='primary'
                                        style={{ width: '100%' }}
                                        onClick={() => handleAddToCart(product)} disabled={product.stock <= 0}
                                    >
                                        Agregar
                                    </button>
                                    <p>Stock disponible: {product.stock}</p>

                                </div>
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h4>Descripción del producto:</h4>
                                <p>{product.description}</p>
                                <hr />
                                <div style={{ marginTop: '1rem' }}>
                                    <h4>Características:</h4>
                                    <ul>
                                        <li>Categoría: {product.category}</li>
                                        <li>Tipo de producto: {product.type}</li>
                                        <li>Marca: {product.brand}</li>
                                        <li>Color: {product.color}</li>
                                        <li>Size: {product.size}</li>
                                        <li>Material: {product.material}</li>
                                        <li>Origen: {product.origen}</li>
                                    </ul>
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