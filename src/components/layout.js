import React from "react"
import { StyleStateProvider } from "./styleStateProvider"
import { CartProvider } from "./Cart/CartProvider"
import { ProductProvider } from "./productProvider"
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
