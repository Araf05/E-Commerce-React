import React, { useState } from 'react'

const FormularioProducto = ({ onAgregar }) => {
    const [producto, setProducto] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
        category: ''
    })

    const [errores, setErrores] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setProducto({ ...producto, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAgregar(producto)
        setProducto({
            name: '',
            price: '',
            description: '',
            image: '',
            category: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar producto</h2>
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    name='name'
                    value={producto.name}
                    onChange={handleChange}
                    required
                />
                {errores.name && <p style={{ colore: 'red' }}>{errores.name}</p>}
            </div>
            <div>
                <label>Precio</label>
                <input
                    type="number"
                    name='price'
                    value={producto.price}
                    onChange={handleChange}
                    min={0}
                    required
                />
                {errores.price && <p style={{ colore: 'red' }}>{errores.price}</p>}
            </div>
            <div>
                <label>Descripción</label>
                <textarea
                    name='description'
                    value={producto.description}
                    onChange={handleChange}
                    required
                />
                {errores.description && <p style={{ colore: 'red' }}>{errores.description}</p>}
            </div>
            <div>
                <label>Imagen</label>
                <input
                    type="text"
                    name='image'
                    value={producto.image}
                    onChange={handleChange}
                    required
                />
                {errores.image && <p style={{ colore: 'red' }}>{errores.image}</p>}
            </div>
            <div>
                <label>Categoría</label>
                <input
                    type="text"
                    name='category'
                    value={producto.category}
                    onChange={handleChange}
                    required
                />
                {errores.category && <p style={{ colore: 'red' }}>{errores.category}</p>}
            </div>
            <div>
                <label>Tipo</label>
                <input
                    type="text"
                    name='type'
                    value={producto.type}
                    onChange={handleChange}
                    required
                />
                {errores.type && <p style={{ colore: 'red' }}>{errores.type}</p>}
            </div>
            <button type='submit'>Crear</button>
        </form>
    )
}

export default FormularioProducto