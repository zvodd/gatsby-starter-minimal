import React from "react"
import { StyleStateProvider } from "./StyleStateProvider"
import { CartProvider } from "./Cart/CartProvider"
import { ProductProvider } from "./ProductProvider"
import "../global.sass"

const Layout = ({ children }) => {
  return (
    <StyleStateProvider>
      <ProductProvider>
        <CartProvider>{children}</CartProvider>
      </ProductProvider>
    </StyleStateProvider>
  )
}

export default Layout
