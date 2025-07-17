import React, { useContext } from 'react'
import './styleCart.css'
import Empty from '../assets/empty-box.svg'
import { CartContext } from '../context/CartContext'

const Cart = ({ isOpen, onClose }) => {

    const { cart, handleDeleteFromCart, vaciarCarrito, handleAddToCart } = useContext(CartContext)



    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h3 style={{ color: 'black' }}>Mi carrito</h3>
                <button onClick={onClose} className='close-button'>
                    <i class="fa-solid fa-square-xmark icon"></i>
                </button>
            </div>
            <div className='cart-content'>
                {cart.length === 0 ?
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
                                        <div style={{ display: 'flex',  width: '100%', gap:'15px' }}>
                                            <div className='image-box'>
                                                <img src={item.image} alt={item.name} title={item.name} />
                                            </div>

                                            <div>
                                                <p style={{ fontSize: '.8rem', margin: '0' }}>Item No. ITM-{item.id}</p>
                                                <h5>{item.brand}</h5>
                                                <p>{item.type}</p>
                                                {item.category === 'Indumentaria' ?
                                                    <p>Talle: {item.characteristics.size} </p> :
                                                    <p>Material: {item.characteristics.material} </p>
                                                }
                                                <div className='cantidadContainer'>
                                                    <button onClick={() => handleDeleteFromCart(item)} className='qtyButton'>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => handleAddToCart(item)} className='qtyButton'>+</button>
                                                </div>
                                                <div>
                                                    <p style={{ margin: '0', fontSize: '12px' }}>Total</p>
                                                    <p style={{ margin: '0' }}> ${item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </>
                            ))}
                        </ul>
                        < div >
                            <button className='delete' onClick={vaciarCarrito}>Vaciar carrito</button>
                        </div>
                    </>)
                }
            </div>

        </div>
    )
}

export default Cart