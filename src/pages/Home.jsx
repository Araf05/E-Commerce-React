import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import cartLoading from '../assets/shopping-cart.webm'
import ofertas from '../assets/banners/sale-banner.png'
import promociones from '../assets/banners/super-sale.png'
import Carousel from '../components/estaticos/Carousel'
import { CartContext } from '../context/CartContext'

const Home = () => {
    const { cargando } = useContext(CartContext)

    return (
        <>
            <Header />
            <main>
                <Carousel ofertas={ofertas} promociones={promociones} />
                {
                    cargando ?
                        (
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                                <video autoPlay loop muted playsInline>
                                    <source
                                        src={cartLoading} type='video/webm'
                                    />
                                </video>
                                <h3>Cargando...</h3>
                            </div>
                        ) : (
                            <ProductList />
                        )
                }
            </main >
            <Footer />
        </>
    )
}

export default Home
