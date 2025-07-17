import React, { useContext } from 'react'
import './styleCart.css'
import Empty from '../assets/empty-box.svg'
import check from '../assets/check.webm'
import { CartContext } from '../context/CartContext'

const Cart = ({ isOpen, onClose }) => {

    const { cart, handleDeleteFromCart, vaciarCarrito, handleAddToCart, getTotal, finalizarCompra, comprar } = useContext(CartContext)



    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h3 style={{ color: 'black' }}>Mi carrito</h3>
                <button onClick={onClose} className='close-button'>
                    <i class="fa-solid fa-square-xmark icon"></i>
                </button>
            </div>
            <div className='cart-content'>
                {comprar === true ? (
                    <div style={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                        <video autoPlay muted playsInline style={{width:'150px'}}>
                            <source src={check} type='video/webm' />
                        </video>
                        <h4>Compra finalizada</h4>
                    </div>

                ) :

                    cart.length === 0 ?
                        (
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <img src={Empty} alt="Carrito vacio" />
                                <p style={{ color: 'red', fontWeight: 'bold', margin: 'auto' }}>
                                    El carrito está vacío
                                </p>
                                <p style={{ fontSize: '.5rem', color: 'black' }}>
                                    <a href="https://iconscout.com/illustrations/empty-box" class="text-underline font-size-sm" target="_blank">Empty Box</a> by <a href="https://iconscout.com/es/contributors/dominika-fasciszewska/:assets" class="text-underline font-size-sm">Dominika Faściszewska</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
                                </p>
                            </div>) :
                        (<>
                            <ul className='cart-item' >
                                {cart.map((item, index) => (
                                    <>
                                        <li key={item.id} style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid grey' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                                <p className='item-name'>{item.name}</p>
                                                <button onClick={() => handleDeleteFromCart(item)} className='quitarCarrito' >
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </button>
                                            </div>
                                            <div style={{ display: 'flex', width: '100%', gap: '15px' }}>
                                                <div className='image-box'>
                                                    <img src={item.image} alt={item.name} title={item.name} />
                                                </div>

                                                <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                                                    <p style={{ fontSize: '.8rem', margin: '0' }}>Item No. ITM-{item.id}</p>
                                                    <h6>{item.brand}</h6>
                                                    <p>{item.type}</p>
                                                    {item.category === 'Indumentaria' ?
                                                        <p>Talle: {item.characteristics.size} </p> :
                                                        <p>Material: {item.characteristics.material} </p>
                                                    }

                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', gap: '15px' }}>
                                                <div className='cantidadContainer'>
                                                    <button onClick={() => handleDeleteFromCart(item)} className='qtyButton'>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => handleAddToCart(item)} className='qtyButton'>+</button>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '12px' }}>Total</p>
                                                    <p><strong> ${(item.price * item.quantity).toFixed(2)}</strong></p>
                                                </div>
                                            </div>

                                        </li>
                                    </>
                                ))}
                            </ul>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4>Total: </h4>
                                <h4>${getTotal()}</h4>
                            </div>
                            <hr />
                            < div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} >
                                <button className='delete' onClick={vaciarCarrito}>Vaciar carrito</button>

                                <button className='primary' onClick={finalizarCompra}>Comprar ahora</button>
                            </div>
                        </>)
                }
            </div>

        </div>
    )
}

export default Cart