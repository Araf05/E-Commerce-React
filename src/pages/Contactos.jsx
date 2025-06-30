import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const Contactos = () => {
    
    return (
        <>
            <Header />
            <h1>Contactos</h1>
            <p style={{ textAlign: 'center', marginBottom: '20px', color: '#555' }}>
                Podés comunicarte con nosotros a través de nuestras redes sociales o por correo electrónico. ¡Te responderemos lo antes posible!
            </p>

            <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px', lineHeight: '2', display:'block' }}>
                <li><strong>Email:</strong> contacto@mitienda.com</li>
                <li><strong>Teléfono:</strong> +54 11 1234-5678</li>
                <li><strong>Dirección:</strong> Av. Siempre Viva 123, Buenos Aires, Argentina</li>
                <li>
                    <strong>Redes sociales:</strong>
                    <ul style={{ listStyle: 'none', paddingLeft: '15px', display:'block' }}>
                        <li>📘 Facebook: <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">facebook.com/mitienda</a></li>
                        <li>📷 Instagram: <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">@mitienda</a></li>
                        <li>🐦 Twitter: <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">@mitienda</a></li>
                    </ul>
                </li>
            </ul>
            <Footer />
        </>
    )
}

export default Contactos