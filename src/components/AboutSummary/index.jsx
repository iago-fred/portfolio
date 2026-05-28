import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { MyContext } from "../../context"

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
`

const Secao = styled.section`
    width: 100%;
    padding: 100px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    max-width: 800px;
    width: 100%;
    animation: ${fadeUp} 0.8s ease forwards;
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.color};
    text-align: center;
    margin: 0 0 20px 0;
    span { color: ${props => props.spanColor}; }
`

const Bio = styled.p`
    color: #94a3b8;
    font-size: 16px;
    line-height: 1.9;
    text-align: center;
    max-width: 650px;
    margin: 0 auto 32px;

    strong { color: ${props => props.color}; }
`

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Btn = styled.button`
    background: transparent;
    color: ${props => props.color};
    border: 1px solid ${props => props.color};
    padding: 14px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
        background-color: ${props => props.color}22;
        transform: translateY(-2px);
        box-shadow: 0 0 15px ${props => props.color}44;
    }
`

export default function AboutSummary() {
    const { cor2, cor3 } = useContext(MyContext)
    const navigate = useNavigate()

    return (
        <Secao id="about-home">
            <Content>
                <Title color={cor2} spanColor={cor3}>
                    Sobre <span>Mim</span>
                </Title>
                <Bio color={cor2}>
                    Sou desenvolvedor fullstack com experiência em <strong>React, Node.js, Python e MongoDB</strong>. 
                    Crio sistemas web, dashboards, APIs e automações para diversos tipos de projeto.
                </Bio>
                <Bio color={cor2}>
                    Atualmente também atuo como <strong>Supervisor de Operações</strong> em uma distribuidora 
                    de produtos estéticos, onde aplico minha visão de desenvolvimento para resolver 
                    problemas reais de logística e gestão.
                </Bio>
                <BtnWrapper>
                    <Btn color={cor3} onClick={() => navigate("/sobre")}>
                        📖 Saber mais sobre mim
                    </Btn>
                </BtnWrapper>
            </Content>
        </Secao>
    )
}
