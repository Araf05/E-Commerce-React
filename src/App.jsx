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

        <Route path='/' element={<Home />} />

        <Route path='/acercade' element={<AcercaDe />} />

        <Route path='/productos' element={<GaleriaDeProductos />} />

        <Route path='/productos/:id' element={<DetalleProducto productos={productos} cargando={cargando} />} />

        <Route path='/contacto' element={<Contactos />} />

        <Route path='/admin' element={<RutasProtegidas isAuthenticated={isAuthenticated}> <Admin /> </RutasProtegidas>} />

        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound />} />

      </Routes >
    </Router >
  )
}

export default App
