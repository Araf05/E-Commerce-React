import React from 'react'
import './styleCart.css'

const Cart = ({ cartItems, isOpen, onClose, quitarCarrito }) => {
    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
                <button onClick={onClose} className='close-button'>X</button>
            </div>
            <div className='cart-content'>
                {cartItems.length === 0 ?
                    (<p style={{ color: 'red' }}>El carrito está vacío</p>) :
                    (<ul className='cart-item' >
                        {cartItems.map((item, index) => (
                            <>
                                <li key={item.id}>
                                    <p className='item-name'>{item.title}</p>
                                    <p style={{margin:'0'}}> ${item.price}</p>
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