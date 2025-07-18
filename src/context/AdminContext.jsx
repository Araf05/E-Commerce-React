import { createContext, useEffect, useState } from "react"
import Swal from "sweetalert2"

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

            Swal.fire({
                title: "Agregado!",
                text: "Producto agregado correctamente!",
                icon: "success"
            });
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
            Swal.fire({
                title: "Actualizado!",
                text: "El producto ha sido actualizado correctamente.",
                icon: "success"
            });
            console.log(data)
            console.log(producto)
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
                Swal.fire({
                    title: "¿Está seguro que desea eliminar este producto?",
                    text: "No podrás recuperar este producto nuevamnete",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    cancelButtonText: "Cancelar",
                    confirmButtonText: "Si, eliminar!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Eliminado!",
                            text: "El producto ha sido eliminado correctamente.",
                            icon: "success"
                        });
                    }
                });
                setOpen(false)
                cargarProductos()
            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: "Hubo un problema a eliminar el producto.",
                    icon: "error"
                });
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