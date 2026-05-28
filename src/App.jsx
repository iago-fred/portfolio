import styled, { keyframes } from 'styled-components'
import Header from "./components/Header"
import { useContext, useEffect } from 'react'
import { MyContext } from './context'
import Card from './components/Card'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Pagina = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Plus Jakarta Sans", sans-serif;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  /* 1. O fundo inicial da página será preto absoluto */
  background-color: #000000; 
`

const Background = styled.div`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  
  /* Cria um "isolamento" para que os z-index negativos abaixo não sumam atrás da Pagina */
  isolation: isolate; 

  /* Compartilhamos a animação e o posicionamento para ambos os efeitos */
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    opacity: 0;
    animation: ${fadeIn} 3s ease-in-out forwards;
    
    /* Z-index negativo garante que os fundos fiquem atrás do texto/conteúdo da sua tela */
    z-index: -1; 
    pointer-events: none;
  }

  /* 2. O ::before revela o fundo cinza e os pontilhados */
  &::before {
    background-color: #0f0f0f;
    background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
    background-size: 30px 30px;
    background-attachment: fixed;
  }

  /* 3. O ::after revela o brilho azul */
  &::after {
    background-image: radial-gradient(circle at 50% 10%, #006aff13 0%, #000000a9 50%);
    background-size: 100% 100%;
    background-attachment: fixed;
  }
`

function App() {

  const { setTela } = useContext(MyContext)

  useEffect(() => {
    window.addEventListener("resize", () => setTela(window.innerWidth))
  }, [])

  return (
    <Pagina>
      <Background>
        <Header />
        <Card/>
      </Background>
    </Pagina>
  )
}

export default App