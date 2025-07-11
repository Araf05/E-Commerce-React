import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import DetalleProducto from '../components/DetalleProducto'

const Producto = ({ productos, cargando }) => {
    return (
        <>
            <Header />
            <main>
                <DetalleProducto productos={productos} cargando={cargando} />
            </main>
            <Footer />
        </>
    )
}

export default Producto