import { useContext } from "react"
import styled, { keyframes } from "styled-components"
import { MyContext } from "../../context"
import Nav from "../Nav"

const showIn = keyframes`
    0%{
        filter: blur(10px);
        opacity: 0;
        transform: scaleY(0);
    }
    100%{
        filter: blur(0);
        opacity: 1;
        transform: scaleY(1);
    }
`

const Sec = styled.header`
    width: 100%;
    margin: 0;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 2px 30px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.fontColor};
    
    /* Mova o transform-origin para cá e garanta que ele seja aplicado */
    transform-origin: center top; 
    
    /* Use a animação */
    animation: ${showIn} 1s ease-in forwards;
`
const Nome = styled.h2`
    font-size: 25px;

    span {
        color: ${props => props.spanColor};
    }
`

const dashBlink = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

const Dash = styled.div`
    width: 2px;
    height: 22px;
    background-color: ${props => props.color};
    animation: ${dashBlink} 0.5s steps(2) alternate infinite;
`

const Logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6px;
`


export default function Header() {
    const { cor1, cor2, cor3, tela } = useContext(MyContext)

    if (tela >= 780){
        return (
            <Sec
                backgroundColor={cor1}
                fontColor={cor2}>
                <Logo >
                    <Nome spanColor={cor3}>Iago<span>Frederick</span></Nome>
                    <Dash color={cor3} />
                </Logo>
                <Nav />
            </Sec>
        )
    } else {
        return (
            <Sec
                backgroundColor={cor1}
                fontColor={cor2}>
                <Logo >
                    <Nome spanColor={cor3}>Iago<span>Frederick</span></Nome>
                    <Dash color={cor3} />
                </Logo>
            </Sec>
        )
    }
}