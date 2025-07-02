import { createContext, useEffect, useState } from "react"

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {

    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false)
    const [seleccionado, setSeleccionado] = useState(null)
    const [openEditor, setOpenEditor] = useState(false)
    const apiURL = 'https://6861b8d996f0cc4e34b75009.mockapi.io/store/products'

    useEffect(() => {
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProducts(data)
                    setLoading(false)
                }, 2000)
            })
            .catch((error) => {
                console.error('Error fetching data: ', error)
                setError(true)
                setLoading(false)
            })
    }, [])

    const cargarProductos = async () => {
        try {
            const res = await fetch(apiURL)
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log('Error al cargar productos ', error)
        }
    }

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(apiURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) {
                throw new Error('Error al agregar producto')
            }
            const data = await respuesta.json()
            console.log(data)
            console.log({ producto })
            alert('Producto agregado correctamente')
            cargarProductos()
        } catch (error) {
            console.log(error.message)
        }
        console.log({ productos })
    }

    const actualizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${apiURL}/${producto.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) {
                throw Error('Error al actualizar el producto')
            }
            const data = await respuesta.json()
            alert('Producto actualizado correctamente')
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos()

        } catch (error) {
            console.log('Hubo un problema ', error)
        }
    }


    const eliminarProducto = async (id) => {
        const confirmar = window.confirm('¿Esta seguro de eliminar el producto?')
        if (confirmar) {
            try {
                const respuesta = await fetch(`${apiURL}/${id}`, {
                    method: 'DELETE'
                })
                if (!respuesta.ok) throw Error('Error al eliminar producto')
                alert('Producto eliminado correctamente')
                setOpen(false)
                cargarProductos()
            } catch (error) {
                alert('Hubo un problema a eliminar el producto')
            }
        }
    }

    return (
        <AdminContext.Provider value={{
            productos, loading,
            open, setOpen,
            seleccionado, setSeleccionado,
            openEditor, setOpenEditor,
            agregarProducto,
            eliminarProducto,
            actualizarProducto,
            apiURL
        }}>
            {children}
        </AdminContext.Provider>
    )
}