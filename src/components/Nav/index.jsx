import styled from "styled-components"
import { MyContext } from "../../context"
import { useContext } from "react"

const Menu = styled.nav`
  /* 1. Centraliza o NAV dentro do Header */
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center; /* Alinha verticalmente os itens e o botão */
    gap: 50px;
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${props => props.textColor};
  }

  li {
    cursor: pointer;
    position: relative;
    
    p {
      margin: 0;
      padding: 5px 0;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${props => props.textColor};
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`
const BT = styled.li`
  /* 1. Reset e Estilo Base */
  background-color: ${props => props.BtColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 25px; /* Aumentei um pouco o preenchimento lateral */
  height: 35px;
  box-sizing: border-box;
  border-radius: 50px; /* Botão mais arredondado (pílula) */
  color: #000; /* Texto escuro para contrastar com a cor neon */
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  
  /* 2. Efeito de Profundidade e Transição */
  transition: all 0.3s ease;
  border: 1px solid transparent;

  /* 3. IMPORTANTE: Remove o underline do menu pai */
  &::after {
    display: none !important;
  }

  /* 4. Estado de Hover (Interatividade) */
  &:hover {
    background-color: transparent;
    color: ${props => props.BtColor};
    border-color: ${props => props.BtColor};
    
    /* Um brilho suave (Glow) que combina com seu gradiente azul do fundo */
    box-shadow: 0 0 15px ${props => props.BtColor}66; 
    transform: translateY(-2px); /* Pequeno pulo para cima */
  }

  /* 5. Efeito de Clique */
  &:active {
    transform: translateY(0);
    box-shadow: 0 0 5px ${props => props.BtColor};
  }
`

export default function Nav() {
    const { nav, cor2, cor3 } = useContext(MyContext)
    return (
        <Menu textColor={cor2}>
            <ul>
                {nav.map((e, i) => {
                    return (
                        <li key={`${i}-nav`}>
                            <p>{e.txt}</p>
                        </li>
                    )
                })}
                <BT BtColor={cor3}>Contato</BT>
            </ul>
        </Menu>
    )
}