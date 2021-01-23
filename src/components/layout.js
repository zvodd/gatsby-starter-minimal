import { StyleStateContext } from "./StyleStateProvider"
import * as React from "react"
import "../global.sass"

const Layout = ({ children }) => (
  <StyleStateContext.Consumer>
    {(context) => (
      <React.Fragment>
        <div className={context.isDark ? "darkTheme" : "lightTheme"}>
          {children}
        </div>
      </React.Fragment>
    )}
  </StyleStateContext.Consumer>
)

export default Layout
