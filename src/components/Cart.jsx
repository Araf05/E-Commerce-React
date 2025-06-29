import React from 'react'
import './styleCart.css'
import Empty from '../assets/empty-box.svg'

const Cart = ({ cartItems, isOpen, onClose, quitarCarrito }) => {
    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
                <button onClick={onClose} className='close-button'>
                    <i class="fa-solid fa-square-xmark icon"></i>
                </button>
            </div>
            <div className='cart-content'>
                {cartItems.length === 0 ?
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
                        {cartItems.map((item, index) => (
                            <>
                                <li key={item.id}>
                                    <p className='item-name'>{item.title}</p>
                                    <p style={{ margin: '0' }}> ${item.price}</p>
                                    <button onClick={() => quitarCarrito(item)} className='quitarCarrito' >
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