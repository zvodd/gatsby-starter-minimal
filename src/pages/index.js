import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Thing from "../components/thing"

const IndexPage = () => {
  
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
          <p>
            Edit <code> src/pages/index.js</code> to see this page update in
            real-time.{" "}
            <span role="img" aria-label="Sunglasses smiley emoji">
              😎
            </span>
          </p>
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
