import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import cartLoading from '../assets/shopping-cart.webm'
import ofertas from '../assets/banner.jpg'
import promociones from '../assets/banner2.jpg'
import { CartContext } from '../context/CartContext'
import Carousel from '../components/estaticos/Carousel'

const GaleriaDeProductos = () => {
    const { cart, cargando, handleDeleteFromCart } = useContext(CartContext)


    return (
        <>
            <Header cartItems={cart} quitarCarrito={handleDeleteFromCart} />
            <body>
                <main>
                    <Carousel ofertas={ofertas} promociones={promociones} />
                    {
                        cargando ?
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                                <video autoPlay loop muted playsInline>
                                    <source
                                        src={cartLoading} type='video/webm'
                                    />
                                </video>
                                <h3>Cargando...</h3>
                            </div> :
                            <ProductList />
                    }
                </main>
            </body>
            <Footer />
        </>
    )
}

export default GaleriaDeProductos