import { useContext } from "react"
import styled from "styled-components"
import { MyContext } from "../../context"

const Secao = styled.section`
    width: 100%;
    padding: 100px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    max-width: 700px;
    width: 100%;
    text-align: center;
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.color};
    margin: 0 0 12px 0;
    
    span {
        color: ${props => props.spanColor};
    }
`

const Sub = styled.p`
    color: #94a3b8;
    font-size: 16px;
    margin: 0 0 48px 0;
`

const Grid = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
`

const Card = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    background-color: #111111;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    padding: 32px 40px;
    text-decoration: none;
    min-width: 200px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        border-color: ${props => props.color}66;
        transform: translateY(-4px);
        box-shadow: 0 0 30px ${props => props.color}22;
    }
`

const Icon = styled.span`
    font-size: 36px;
`

const Label = styled.span`
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
`

const Value = styled.span`
    font-size: 15px;
    color: ${props => props.color};
    font-weight: 600;
`

export default function Contact() {
    const { cor2, cor3 } = useContext(MyContext)

    return (
        <Secao id="contact">
            <Content>
                <Title color={cor2} spanColor={cor3}>Entre em <span>Contato</span></Title>
                <Sub>Vamos conversar sobre projetos, ideias ou café ☕</Sub>
                <Grid>
                    <Card href="https://github.com/iago-fred" target="_blank" color={cor3}>
                        <Icon>🐙</Icon>
                        <Label>GitHub</Label>
                        <Value color={cor2}>@iago-fred</Value>
                    </Card>
                    <Card href="mailto:iagofrederick.c@gmail.com" color={cor3}>
                        <Icon>📧</Icon>
                        <Label>Email</Label>
                        <Value color={cor2}>iagofrederick.c@gmail.com</Value>
                    </Card>
                </Grid>
            </Content>
        </Secao>
    )
}
