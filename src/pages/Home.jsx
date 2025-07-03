import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/load-1110_256.gif'
import ofertas from '../assets/banner.jpg'
import promociones from '../assets/banner2.jpg'
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
                    cargando ? <img src={loading} alt='loading' /> :
                        <ProductList />
                }
            </main >
            <Footer />
        </>
    )
}

export default Home
