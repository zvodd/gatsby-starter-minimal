import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Thing from "../components/thing"
import { graphql, PageQuery } from "gatsby"

const IndexPage = ({ data }) => {
  const products = data.allProduct.edges.map((e) => e.node)

  return (
    <Layout>
      <>
        <Thing />
        <main>
          <title>Home Page</title>
          <h1>
            Congratulations
            <br />
            <span>— you just made a Gatsby site! </span>
            <span role="img" aria-label="Party popper emojis">
              🎉🎉🎉
            </span>
          </h1>
          <Link to="/testcart"> TestCart</Link>
          <h3>Products:</h3>
          <ul>
            {products.map((p) => (
                <li>
                <Link to={`/product/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
          </ul>

          <h3>Links:</h3>
          <ul>
            <li>
              <a href="https://example.com">example.com</a>
            </li>
          </ul>
        </main>
      </>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexAllProductQuery {
    allProduct {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`
