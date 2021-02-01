import React, { useState } from "react"
import {StripeData} from './Cart/testCartData'

const ProductContext = React.createContext()
const { Provider } = ProductContext;

const ProductProvider = ({ children }) => {
  
  const value = {
    products: StripeData
  }

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export { ProductContext as default, ProductProvider };
