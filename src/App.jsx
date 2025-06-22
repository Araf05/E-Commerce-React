import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import Contactos from './pages/Contactos'
import NotFound from './pages/NotFound'
import DetalleProducto from './components/DetalleProducto'

function App() {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
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


  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home quitarCarrito={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/acercade' element={<AcercaDe quitarCarrito={handleDeleteFromCart} cart={cart} />} />

        <Route path='/productos' element={<GaleriaDeProductos quitarCarrito={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/productos/:id' element={<DetalleProducto productos={productos} />} />

        <Route path='/contacto' element={<Contactos quitarCarrito={handleDeleteFromCart} cart={cart} />} />

        <Route path='*' element={<NotFound />} />

      </Routes >
    </Router >
  )
}

export default App
