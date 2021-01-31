import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TestCart from "../components/tests/test_cart1"

const IndexPage = () => {
  
  return (
    <Layout>
        <main>
          <title>Home Page</title>
          <h1>
            Cart Listing
            <br />
            <span role="img" aria-label="Party popper emojis">
              🎉🎉🎉
            </span>
          </h1>
        <TestCart />
        </main>
    </Layout>
  )
}

export default IndexPage
