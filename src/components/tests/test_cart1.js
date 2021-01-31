import React, { useContext } from "react"
import CartContext from "../Cart/CartProvider"

const TestCart = () => {
  const cartContext = useContext(CartContext)

  const addProduct = () => {
    cartContext.actions.AddToCart({
      productId: "prod_2",
      priceId: "price_2_1",
      value: 12300,
    })
  }

  const removeProduct = () =>{
    cartContext.actions.RemoveFromCart({
    "productId": "prod_2",
    })
  }
  return (
    <div>
      <pre>{JSON.stringify(cartContext.cart, null, 2)}</pre>
      <button onClick={addProduct}>Do a Thing</button>
      <button onClick={removeProduct}>unDo a Thing</button>
    </div>
  )
}

export default TestCart
