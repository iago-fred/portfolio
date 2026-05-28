import styled, { keyframes } from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Home from "./pages/Home"
import ProjectPage from "./pages/ProjectPage"
import AboutPage from "./pages/AboutPage"

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Pagina = styled.div`
  width: 100vw;
  min-height: 100vh;
  font-family: "Plus Jakarta Sans", sans-serif;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #000000;
`

const Background = styled.div`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  isolation: isolate;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
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
  return (
    <Pagina>
      <Background>
        <Header />
        <div style={{ paddingTop: '60px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeto/:id" element={<ProjectPage />} />
            <Route path="/sobre" element={<AboutPage />} />
          </Routes>
        </div>
      </Background>
    </Pagina>
  )
}

export default App
