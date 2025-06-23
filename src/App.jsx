import { useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import Contactos from './pages/Contactos'
import NotFound from './pages/NotFound'
import DetalleProducto from './components/DetalleProducto'
import Login from './pages/Login'
import Admin from './pages/Admin'
import RutasProtegidas from './auth/RutasProtegidas'
import { CartContext } from './context/CartContext'

function App() {
  const { cart, cargando, productos, error, isAuthenticated, handleAddToCart, handleDeleteFromCart } = useContext(CartContext)


  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home quitarCarrito={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/acercade' element={<AcercaDe quitarCarrito={handleDeleteFromCart} cart={cart} />} />

        <Route path='/productos' element={<GaleriaDeProductos quitarCarrito={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/productos/:id' element={<DetalleProducto productos={productos} />} />

        <Route path='/contacto' element={<Contactos quitarCarrito={handleDeleteFromCart} cart={cart} />} />

        <Route path='/admin' element={<RutasProtegidas isAuthenticated={isAuthenticated}> <Admin /> </RutasProtegidas>} />

        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound />} />

      </Routes >
    </Router >
  )
}

export default App
