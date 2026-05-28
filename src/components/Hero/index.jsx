import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { MyContext } from "../../context"

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
`

const Secao = styled.section`
    width: 100%;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    box-sizing: border-box;
`

const Content = styled.div`
    max-width: 750px;
    text-align: center;
    animation: ${fadeUp} 1s ease forwards;
`

const Greeting = styled.span`
    font-size: 18px;
    color: ${props => props.color};
    font-weight: 500;
    display: block;
    margin-bottom: 12px;
`

const Name = styled.h1`
    font-size: clamp(42px, 8vw, 72px);
    font-weight: 800;
    margin: 0 0 8px 0;
    line-height: 1.1;
    color: ${props => props.color};
    
    span { color: ${props => props.spanColor}; }
`

const Role = styled.div`
    font-size: 18px;
    color: #94a3b8;
    margin-bottom: 24px;
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
`

const Tag = styled.span`
    border: 1px solid ${props => props.color}44;
    color: ${props => props.color};
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 500;
`

const Desc = styled.p`
    font-size: 17px;
    color: #94a3b8;
    line-height: 1.8;
    max-width: 600px;
    margin: 0 auto 32px;
`

const CTA = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
`

const BtnPrimary = styled.button`
    background-color: ${props => props.color};
    color: #000;
    border: none;
    padding: 14px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 20px ${props => props.color}66;
    }
`

const BtnSecondary = styled.button`
    background: transparent;
    color: ${props => props.color};
    border: 1px solid ${props => props.color};
    padding: 14px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${props => props.color}22;
        transform: translateY(-2px);
    }
`

export default function Hero() {
    const { cor2, cor3 } = useContext(MyContext)
    const navigate = useNavigate()

    return (
        <Secao id="hero">
            <Content>
                <Greeting color={cor3}>👋 Olá, eu sou</Greeting>
                <Name color={cor2} spanColor={cor3}>
                    Iago <span>Frederick</span>
                </Name>
                <Role>
                    <Tag color={cor3}>Desenvolvedor Fullstack</Tag>
                    <Tag color={cor3}>Supervisor de Operações</Tag>
                </Role>
                <Desc>
                    Desenvolvedor fullstack disponível para criar sistemas web, dashboards, 
                    APIs e automações. Atualmente também atuo como Supervisor de Operações 
                    em uma distribuidora — onde eu mesmo crio as soluções que uso no dia a dia.
                </Desc>
                <CTA>
                    <BtnPrimary color={cor3} onClick={() => navigate("/#projects")}>
                        Ver Projetos
                    </BtnPrimary>
                    <BtnSecondary color={cor3} onClick={() => navigate("/#contact")}>
                        Entrar em Contato
                    </BtnSecondary>
                </CTA>
            </Content>
        </Secao>
    )
}
