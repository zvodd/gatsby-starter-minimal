import React, { useState } from 'react';

// https://www.digitalocean.com/community/tutorials/gatsbyjs-state-management-in-gatsby
// Todo include Key Value store for simple things sidebar state.

export const StyleStateContext = React.createContext();

const StyleStateProvider = props => {
  const [isDark, setTheme] = useState(false);

  return (
    <StyleStateContext.Provider value={{
      isDark,
      changeTheme: () => setTheme(!isDark)
    }}>
      {props.children}
    </StyleStateContext.Provider>
  )
};

export default  ({ element }) => (
  <StyleStateProvider>
    {element}
  </StyleStateProvider>
);