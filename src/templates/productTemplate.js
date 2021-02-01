import React from "react"
import Layout from "../components/layout"
// import Product from "../components/product"
// import SEO from "../components/seo"
import {graphql, PageQuery} from "gatsby"

const ProductTemplate = ({ pageContext: { product, id }, data }) => {
  return (
    <Layout>
      {/* <SEO title="Name" keywords={[Keywords]} /> */}
      <div className="productpagewrap">
        {/* <Product product={product.node} /> */}
        <pre>{JSON.stringify(data,null,2)}</pre>
      </div>
    </Layout>
  )
}

export default ProductTemplate


export const query = graphql`
  query ProductQuery($id: String){
    product(id: {eq: $id}) {
        id
        slug
        name
        prices {
        id
        nickname
        unit_amount
        active
        }
    }
  }
`