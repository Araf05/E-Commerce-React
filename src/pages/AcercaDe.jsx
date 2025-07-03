import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const AcercaDe = () => {
    return (
        <>
            <Header />
            <body>
                <main>
                    <h1>Acerca De</h1>
                    <h2 style={{ color: ' #004080' }}>¿Quiénes somos?</h2>
                    <p>
                        Somos una tienda en línea dedicada a ofrecer productos de calidad con atención personalizada.
                        Nuestro objetivo es brindar una experiencia de compra rápida, fácil y segura para todos nuestros clientes.
                    </p>

                    <h2 style={{ color: '#004080' }}>Nuestra misión</h2>
                    <p>
                        Queremos facilitar el acceso a productos únicos, seleccionados cuidadosamente, con un excelente servicio al cliente
                        y compromiso con la satisfacción de quienes nos eligen.
                    </p>

                    <h2 style={{ color: '#004080' }}>¿Por qué elegirnos?</h2>
                    <ul style={{ lineHeight: '1.6', display: 'block' }}>
                        <li>Atención rápida y personalizada</li>
                        <li>Precios competitivos</li>
                        <li>Variedad de productos</li>
                        <li>Envíos a todo el país</li>
                    </ul>
                </main>
            </body>
            <Footer />
        </>
    )
}

export default AcercaDe