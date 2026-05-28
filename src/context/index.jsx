import { createContext, useContext, useState } from "react";
import { keyframes } from "styled-components";

export const MyContext = createContext()


export function MyProvider({ children }) {
    
    const cor1 = "#0b0b0b"
    const cor2 = "#e2e2e2"
    const cor3 = "#58d851"

    const NAV_PAGS = [
        {
            txt: "Home",
            navigate: ""
        },
        {
            txt: "Trabalhos",
            navigate: ""
        },
        {
            txt: "Sobre mim",
            navigate: ""
        }
    ]

    const [tela, setTela] = useState(window.innerWidth)

    const value = {
        cor1, cor2, cor3,
        nav: NAV_PAGS,
        tela, setTela
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}