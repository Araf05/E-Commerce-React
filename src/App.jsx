import { useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import Contactos from './pages/Contactos'
import NotFound from './pages/NotFound'
import Producto from './pages/Producto'
import Login from './pages/Login'
import Admin from './pages/admin/Admin'
import RutasProtegidas from './auth/RutasProtegidas'
import { CartContext } from './context/CartContext'
import { useAuth } from './context/AuthContext'

function App() {
  const { cargando, productos } = useContext(CartContext)
  const { isAuthenticated } = useAuth()


  return (

    <Routes>

      <Route path='/' element={<Home />} />

      <Route path='/acercade' element={<AcercaDe />} />

      <Route path='/productos' element={<GaleriaDeProductos />} />

      <Route path='/productos/:id' element={<Producto productos={productos} cargando={cargando} />} />

      <Route path='/contacto' element={<Contactos />} />

      <Route path='/admin' element={<RutasProtegidas isAuthenticated={isAuthenticated}> <Admin /> </RutasProtegidas>} />

      <Route path='/login' element={<Login />} />

      <Route path='*' element={<NotFound />} />

    </Routes >

  )
}

export default App
