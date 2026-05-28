import styled, { keyframes } from 'styled-components'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useContext, useEffect } from 'react'
import { MyContext } from './context'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Pagina = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Plus Jakarta Sans", sans-serif;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #000000;
`

const Background = styled.div`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  min-height: 100%;
  position: relative;
  isolation: isolate;

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
    z-index: -1;
    pointer-events: none;
  }

  &::before {
    background-color: #0f0f0f;
    background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
    background-size: 30px 30px;
    background-attachment: fixed;
  }

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
    return () => window.removeEventListener("resize", () => setTela(window.innerWidth))
  }, [])

  return (
    <Pagina>
      <Background>
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Background>
    </Pagina>
  )
}

export default App
