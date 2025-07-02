import React, { useState, useEffect } from 'react'

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
    const [producto, setProducto] = useState(productoSeleccionado)
    const [errores, setErrores] = useState({})

    useEffect(() => {
        setProducto(productoSeleccionado)
    }, [productoSeleccionado])

    const handleChange = (e) => {
        const { name, value } = e.target
        setProducto({ ...producto, [name]: value })
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            onActualizar(producto)
        }}>
            <h2>Editar producto</h2>
            <div>
                <label>ID:</label>
                <input
                    type="number"
                    name='id'
                    value={producto.id || ''}
                    onChange={handleChange}
                    readOnly
                />
            </div>
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    name='name'
                    value={producto.name || ''}
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
                    step="0.01"
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
                <label>Stock</label>
                <input
                    type="number"
                    name='stock'
                    value={producto.stock}
                    onChange={handleChange}
                />
                {errores.stock && <p style={{ colore: 'red' }}>{errores.stock}</p>}
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
            <div>
                <label>
                    Destacado
                    <input
                        type="checkbox"
                        name='featured'
                        value={producto.featured}
                        onChange={handleChange}
                        style={{ marginLeft: '.5rem' }}
                    />
                </label>

                {errores.featured && <p style={{ colore: 'red' }}>{errores.featured}</p>}
            </div>
            <div>
                <label>Marca</label>
                <input
                    type="text"
                    name='brand'
                    value={producto.brand}
                    onChange={handleChange}
                />
                {errores.brand && <p style={{ colore: 'red' }}>{errores.brand}</p>}
            </div>
            <button type='submit'>Editar</button>
            <button>Cancelar</button>
        </form>
    )
}

export default FormularioEdicion