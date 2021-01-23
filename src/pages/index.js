import React, { useContext } from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { StyleStateContext } from "../components/StyleStateProvider"

const IndexPage = () => {
 const styleContext = useContext(StyleStateContext)
  return (
    <Layout>
        <>
          <h1>{styleContext.isDark ? "Dark Theme" : "Light Theme"}</h1>
          <button onClick={() => styleContext.changeTheme()}>
            {styleContext.isDark ? "Light" : "Dark"}
          </button>

          <Link to="/page-2/">Go to page 2</Link>

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
                <a href="#">OUIHfiueh</a>
              </li>
            </ul>
          </main>
        </>
    </Layout>
  )
}

export default IndexPage
