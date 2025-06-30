import React, { useContext } from 'react'
import './styleCart.css'
import Empty from '../assets/empty-box.svg'
import { CartContext } from '../context/CartContext'

const Cart = ({ isOpen, onClose }) => {

    const { cart, cargando, productos, error, isAuthenticated, handleAddToCart, handleDeleteFromCart } = useContext(CartContext)

    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
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
                    (<ul className='cart-item' >
                        {cart.map((item, index) => (
                            <>
                                <li key={item.id}>
                                    <p className='item-name'>{item.name}</p>
                                    <p style={{ margin: '0' }}> ${item.price}</p>
                                    <button onClick={() => handleDeleteFromCart(item)} className='quitarCarrito' >
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </li>
                            </>
                        ))}
                    </ul>)
                }
            </div>
        </div>
    )
}

export default Cart