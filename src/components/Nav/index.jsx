import { useContext } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import styled from "styled-components"
import { MyContext } from "../../context"

const Menu = styled.nav`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${props => props.textColor};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    cursor: pointer;
    position: relative;
    
    p {
      margin: 0;
      padding: 5px 0;
      color: ${props => props.textColor};
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
  background-color: ${props => props.BtColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 25px;
  height: 35px;
  box-sizing: border-box;
  border-radius: 50px;
  color: #000;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &::after { display: none !important; }

  &:hover {
    background-color: transparent;
    color: ${props => props.BtColor};
    border-color: ${props => props.BtColor};
    box-shadow: 0 0 15px ${props => props.BtColor}66;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 5px ${props => props.BtColor};
  }
`

function scrollToSection(id) {
  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }, 150)
}

export default function Nav() {
  const { nav, cor2, cor3 } = useContext(MyContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e) => {
    // Home always navigates to / and scrolls to hero
    if (e.txt === "Home") {
      if (location.pathname === "/") {
        scrollToSection("hero")
      } else {
        navigate("/")
        scrollToSection("hero")
      }
      return
    }

    // Trabalhos -> scroll to #projects on home
    if (e.txt === "Trabalhos") {
      if (location.pathname === "/") {
        scrollToSection("projects")
      } else {
        navigate("/")
        scrollToSection("projects")
      }
      return
    }

    // Sobre mim -> scroll to #about-home on home
    if (e.txt === "Sobre mim") {
      if (location.pathname === "/") {
        scrollToSection("about-home")
      } else {
        navigate("/")
        scrollToSection("about-home")
      }
      return
    }
  }

  // Contato -> sempre leva à seção de contato (na Home)
  const handleContactClick = () => {
    if (location.pathname === "/") {
      scrollToSection("contact")
    } else {
      navigate("/")
      scrollToSection("contact")
    }
  }

  return (
    <Menu textColor={cor2}>
      <ul>
        {nav.map((e, i) => (
          <li key={`${i}-nav`} onClick={() => handleNavClick(e)}>
            <p>{e.txt}</p>
          </li>
        ))}
        <BT BtColor={cor3} onClick={handleContactClick}>
          Contato
        </BT>
      </ul>
    </Menu>
  )
}
