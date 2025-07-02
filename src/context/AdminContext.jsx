import { Children, createContext, useEffect, useState } from "react"

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {

    return (
        <AdminContext.Provider>
            {children}
        </AdminContext.Provider>
    )
}