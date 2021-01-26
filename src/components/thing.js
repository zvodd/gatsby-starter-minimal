import React, { useContext } from "react"
import StyleStateContext from "../components/StyleStateProvider"


const Thing = () => {
    const styleContext = useContext(StyleStateContext)

    return (
        <>
        <h1>{styleContext.isDark ? "Dark Theme" : "Light Theme"}</h1>
        <button onClick={() => styleContext.changeTheme()}>
            {styleContext.isDark ? "Light" : "Dark"}
        </button>
        <pre>{typeof styleContext !== 'undefined'  ? JSON.stringify(styleContext,null,2) :  "booo"}</pre>
        {/* <pre>{JSON.stringify(styleContext,null,2)}</pre> */}
        </>
    )
}

export default Thing