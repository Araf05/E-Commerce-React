import React, { useState, useEffect, useContext } from 'react'
import './styleFormulario.css'
import { AdminContext } from '../context/AdminContext'

const FormularioProducto = ({ onAgregar }) => {
    const [producto, setProducto] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
        category: '',
        stock: '',
        type: '',
        featured: 'false',
        brand: '',
        characteristics: {}
    })
    const { setOpen } = useContext(AdminContext)
    const [errores, setErrores] = useState({})

    const [categoria, setCategoria] = useState([])

    useEffect(() => {
        fetch('../data/category.json')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setCategoria(datos)
            })
            .catch(error => {
                console.log('Error ', error)
                setErrores(true)
            })
    }, [])

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
            category: '',
            stock: '',
            type: '',
            featured: 'false',
            brand: '',
            characteristics: {}
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
                    value={producto.price || ''}
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
                    value={producto.description || ''}
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
                    value={producto.image || ''}
                    onChange={handleChange}
                    required
                />
                <img src={producto.image || ''} alt={producto.name || ''} />
                {errores.image && <p style={{ colore: 'red' }}>{errores.image}</p>}
            </div>
            <div>
                <label>Categoría</label>
                <select
                    name="category"
                    value={producto.category || ''}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Seleccionar categoría</option>
                    {categoria.map(item => (
                        <option key={item.id} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
                {errores.category && <p style={{ colore: 'red' }}>{errores.category}</p>}
            </div>
            <div>
                <label>Tipo</label>
                {producto.category && (
                    <select
                        name="type"
                        value={producto.type || ''}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Seleccionar tipo</option>
                        {categoria
                            .find(cat => cat.name === producto.category)
                            ?.type.map((tipo, i) => (
                                <option key={i} value={tipo}>
                                    {tipo}
                                </option>
                            ))}
                    </select>
                )}
                {errores.type && <p style={{ colore: 'red' }}>{errores.type}</p>}
            </div>
            <div>
                <label>Stock</label>
                <input
                    type="number"
                    name='stock'
                    value={producto.stock || ''}
                    onChange={handleChange}
                />
                {errores.stock && <p style={{ colore: 'red' }}>{errores.stock}</p>}
            </div>
            <div>
                <label>
                    Destacado
                    <input
                        type="checkbox"
                        name='featured'
                        value={producto.featured || ''}
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
                    value={producto.brand || ''}
                    onChange={handleChange}
                />
                {errores.brand && <p style={{ colore: 'red' }}>{errores.brand}</p>}
            </div>
            <div>
                <label>Origen</label>
                <input
                    type="text"
                    name='origen'
                    value={producto.characteristics.origen || ''}
                    onChange={handleChange}
                />
                {errores.origen && <p style={{ color: 'red' }}>{errores.origen}</p>}
            </div>
            <div>
                <label>Material</label>
                <input
                    type="text"
                    name='material'
                    value={producto.characteristics.material || ''}
                    onChange={handleChange}
                />
                {errores.material && <p style={{ color: 'red' }}>{errores.material}</p>}
            </div>
            {producto.category === 'Indumentaria' &&
                <>
                    <div>
                        <label>Talle</label>
                        <input
                            type="text"
                            name='size'
                            value={producto.characteristics.size || ''}
                            onChange={handleChange}
                        />
                        {errores.size && <p style={{ color: 'red' }}>{errores.size}</p>}
                    </div>
                    <div>
                        <label>Color</label>
                        <input
                            type="text"
                            name='color'
                            value={producto.characteristics.color || ''}
                            onChange={handleChange}
                        />
                        {errores.color && <p style={{ color: 'red' }}>{errores.color}</p>}
                    </div>
                </>
            }

            {producto.category === 'Joyería' &&
                <div>
                    <label>Piedra</label>
                    <input
                        type="text"
                        name='stone'
                        value={producto.characteristics.stone || ''}
                        onChange={handleChange}
                    />
                    {errores.stone && <p style={{ color: 'red' }}>{errores.stone}</p>}
                </div>
            }

            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                <button className='primary' type='submit'>Crear</button>
                <button className='delete' onClick={() => setOpen(false)}>Cancelar</button>
            </div>
        </form>
    )
}

export default FormularioProducto