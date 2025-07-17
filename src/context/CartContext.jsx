import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [busqueda, setBusqueda] = useState('')
    const [comprar, setComprar] = useState(false)

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
            toast.success(`${product.name} agregado al carrito`)
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }

    const handleDeleteFromCart = (product) => {
        toast.error(`${product.name} eliminado del carrito`)
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

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    }

    const finalizarCompra = () => {
        vaciarCarrito()
        setComprar(true)

        // Para que se reinicie automáticamente después de 3 segundos
        setTimeout(() => {
            setComprar(false);
        }, 3000);
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
            busqueda, setBusqueda,
            getTotal,
            finalizarCompra,
            comprar, setComprar
        }}>
            {children}
        </CartContext.Provider>
    )
}