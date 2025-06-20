import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/load-1110_256.gif'
import banner from '../assets/banner.jpg'

const Home = ({ quitarCarrito, agregarCarrito, cart, productos, cargando }) => {
    return (
        <>
            <Header cartItems={cart} quitarCarrito={quitarCarrito} />
            <main>
                <div style={{ width: '100%' }}>
                    <img style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'content', display: 'block', margin: '0 auto' }} src={banner} alt="banner" />
                </div>
                {
                    cargando ? <img src={loading} alt='loading' /> :
                        <ProductList agregarCarrito={agregarCarrito} productos={productos} />
                }
            </main>
            <Footer />
        </>
    )
}

export default Home
