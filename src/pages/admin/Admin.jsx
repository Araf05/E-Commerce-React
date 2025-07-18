import React, { useContext } from 'react'
import AdminHeader from '../../components/estaticos/AdminHeader.jsx'
import cartLoading from '../../assets/shopping-cart.webm'
import FormularioProducto from '../../components/FormularioProducto.jsx'
import FormularioEdicion from '../../components/FormularioEdicion.jsx'
import { AdminContext } from '../../context/AdminContext.jsx'

const Admin = () => {
    const {
        productos, loading,
        open, setOpen,
        seleccionado, setSeleccionado,
        openEditor, setOpenEditor,
        agregarProducto,
        eliminarProducto,
        actualizarProducto,
        apiURL
    } = useContext(AdminContext)

    return (
        <div >
            {loading ? (
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                    <video autoPlay loop muted playsInline>
                        <source
                            src={cartLoading} type='video/webm'
                        />
                    </video>
                    <h3>Cargando...</h3>
                </div>
            ) : (
                <>
                    <AdminHeader />
                    <main>
                        <h1>Panel de control</h1>
                        <ul style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '15px',
                            justifyContent: 'space-evenly',
                            padding: '0'
                        }}>
                            {productos.map((product) => (
                                <li key={product.id}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '200px',
                                        height: '300px',
                                        alignItems: 'center',
                                        border: '1px solid grey',
                                        justifyContent: 'space-between',
                                        padding: '10px'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        width: '150px',
                                        height: '150px',
                                        justifyContent: 'space-evenly'
                                    }}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%',
                                        justifyContent: 'center'
                                    }}>
                                        <span className='nombre' style={{ width: '100%', fontWeight: '400' }}>{product.name}</span>
                                        <span className='precio' style={{ margin: 'auto' }}>${product.price}</span>
                                        <div style={{
                                            display: 'flex',
                                            width: '100%',
                                            padding: '5px',
                                            justifyContent: 'center',
                                            margin: 'auto',
                                            gap: '10px'
                                        }}>
                                            <button
                                                onClick={() => {
                                                    setSeleccionado(product)
                                                    setOpenEditor(true)
                                                }}
                                                className='secondary'
                                            >
                                                Editar
                                            </button>

                                            <button
                                                onClick={() => eliminarProducto(product.id)}
                                                className='delete'>
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setOpen(true)}>Agregar nuevo producto</button>
                        {open && (<FormularioProducto onAgregar={agregarProducto} />)}
                        {openEditor && (<FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto} />)}
                    </main>
                </>

            )}

        </div>
    )
}

export default Admin