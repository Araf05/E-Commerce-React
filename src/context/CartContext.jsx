import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [busqueda, setBusqueda] = useState('')

    useEffect(() => {
        fetch('https://6861b8d996f0cc4e34b75009.mockapi.io/store/products')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error ', error)
                setCargando(false)
                setError(true)
            })
    }, [])

    const productosFiltrados = productos.filter((producto) =>
        (producto?.name || '').toLowerCase().includes(busqueda.toLowerCase())
    )

    const handleAddToCart = (product) => {
        const productInCart = cart.find((item) => item.id === product.id)
        if (productInCart) {
            setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }

    const handleDeleteFromCart = (product) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return null
                    }
                } else {
                    return item
                }
            }).filter(item => item !== null)
        })
    }

    const vaciarCarrito = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{
            cart,
            cargando,
            productos,
            error,
            handleAddToCart,
            handleDeleteFromCart,
            vaciarCarrito,
            productosFiltrados,
            busqueda, setBusqueda
        }}>
            {children}
        </CartContext.Provider>
    )
}