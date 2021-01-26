import React from "react"
import { StyleStateProvider } from "./StyleStateProvider"
import "../global.sass"

const Layout = ({ children }) => {
    return (
    <StyleStateProvider>
        {children}
    </StyleStateProvider>
)}

export default Layout
