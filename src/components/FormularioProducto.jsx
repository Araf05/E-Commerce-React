import React, { useState } from 'react'

const FormularioProducto = ({ onAgregar }) => {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        decripción: '',
        categoria: '',
        stock: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setProducto({ ...producto, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAgregar(producto)
        setProducto({
            nombre: '',
            precio: '',
            decripción: '',
            categoria: '',
            stock: ''
        })
    }

    return (
        <div>
            <form>
                <input
                    type='text'
                    name='name'
                    placeholder='Nombre del Producto'
                    required
                />
                <input
                    type='number'
                    name='price'
                    placeholder='Precio'
                    required
                />
                <input
                    type="text"
                    name='decription'
                    placeholder='Descripción'
                />
                <input
                    type="text"
                    name='category'
                    placeholder='Categoria'
                />
                <input
                    type="number"
                    name='stock'
                    placeholder='Stock'
                />


                <button type='submit'>
                    Editar
                    {/* {form.id ? 'Editar' : 'Crear'} */}
                </button>
            </form>
        </div>
    )
}

export default FormularioProducto