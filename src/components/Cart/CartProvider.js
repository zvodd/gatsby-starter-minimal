import React, { useState } from "react"
import CartSystem from "./CartSystem"
import { TestCartData } from "./testCartData"

const CartContext = React.createContext()
const { Provider } = CartContext

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(TestCartData)

  // Decorate cart system with injection wrappers
  const actions = Object.fromEntries(
    Object.entries(CartSystem).map(([name, fn]) => {
      if (name.slice(0, 4) === "set_") {
        const newfn = function () {
            const args = [cart, ...arguments]
            console.log("CartSystem", name, "(", ...args ,")")
            // debugger
            const rv = fn.apply(null, args)
            // TODO also update localstorage
            return setCart(rv)
        }
        // remove the "set_" prefix
        return [name.slice(4), newfn]
      } else {
        // passive functions
        const newfn = function () {
            const args = [cart, ...arguments]
            console.log("CartSystem", name, "(", ...args ,")")
            return fn.apply(null, args)
        }
        return [name, newfn]
      }
    })
  )

  const value = {
    cart,
    actions,
  }

  return <Provider value={value}>{children}</Provider>
}

export { CartContext as default, CartProvider }
