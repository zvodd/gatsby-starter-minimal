import React, { useState } from "react"

// https://www.digitalocean.com/community/tutorials/gatsbyjs-state-management-in-gatsby
// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// Todo include Key Value store for simple things sidebar state.

const StyleStateContext = React.createContext()
const { Provider } = StyleStateContext;

const StyleStateProvider = ({ children }) => {
  const [isDark, setTheme] = useState(false)

  const value = {
    isDark,
    changeTheme: () => setTheme(!isDark),
  }

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export { StyleStateContext as default, StyleStateProvider };
