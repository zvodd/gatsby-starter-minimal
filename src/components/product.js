import React, { useContext } from "react"
import { ProductsContext } from "./ProductsProvider"

const Items = ({ category }) => {
  const { listProducts } = useContext(ProductsContext)
  const products = listProducts()

  return (
    <div className="productslayout">
      <div className="productsformat">
        {products.map(product => (
          <ProductThumbnail key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Items