import { useContext, useState } from "react"
import styled from "styled-components"
import { MyContext } from "../../context"

const hexToRgba = (hex, alpha) => {
    if (!hex) return `rgba(88, 216, 81, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const Card = styled.a.attrs(props => ({
    style: {
        backgroundImage: props.$active
            ? `radial-gradient(400px circle at ${props.$x}px ${props.$y}px, ${hexToRgba(props.$borderColor, 0.12)}, transparent 60%)`
            : 'none',
    },
}))`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    background-color: rgba(15, 23, 42, 0.527);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    padding: 28px 32px;
    text-decoration: none;
    min-width: 170px;
    transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover {
        border-color: ${props => props.$borderColor};
        transform: translateY(-4px);
        box-shadow: 0 0 30px ${props => props.$borderColor}22;
    }
`

function ContactCard({ href, target, color, children }) {
    const [mouse, setMouse] = useState({ x: 0, y: 0, active: false })

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true
        })
    }

    const handleMouseLeave = () => setMouse(prev => ({ ...prev, active: false }))

    return (
        <Card
            href={href}
            target={target}
            rel="noopener noreferrer"
            $x={mouse.x}
            $y={mouse.y}
            $active={mouse.active}
            $borderColor={color}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </Card>
    )
}

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
    text-align: center;
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.color};
    margin: 0 0 12px 0;
    span { color: ${props => props.spanColor}; }
`

const Sub = styled.p`
    color: #94a3b8;
    font-size: 16px;
    margin: 0 0 48px 0;
`

const Grid = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`

const Icon = styled.span`
    font-size: 32px;
`

const Label = styled.span`
    font-size: 13px;
    color: #64748b;
    font-weight: 500;
`

const Value = styled.span`
    font-size: 14px;
    color: ${props => props.color};
    font-weight: 600;
    word-break: break-all;
`

export default function Contact() {
    const { cor2, cor3 } = useContext(MyContext)

    return (
        <Secao id="contact">
            <Content>
                <Title color={cor2} spanColor={cor3}>Entre em <span>Contato</span></Title>
                <Sub>Vamos conversar sobre projetos, ideias ou café ☕</Sub>
                <Grid>
                    <ContactCard href="https://github.com/iago-fred" target="_blank" color={cor3}>
                        <Icon>🐙</Icon>
                        <Label>GitHub</Label>
                        <Value color={cor2}>@iago-fred</Value>
                    </ContactCard>
                    <ContactCard href="mailto:iagofrederick.c@gmail.com" color={cor3}>
                        <Icon>📧</Icon>
                        <Label>Email</Label>
                        <Value color={cor2}>iagofrederick.c@gmail.com</Value>
                    </ContactCard>
                    <ContactCard href="https://wa.me/5571933008705" target="_blank" color={cor3}>
                        <Icon>💬</Icon>
                        <Label>WhatsApp</Label>
                        <Value color={cor2}>(71) 9330-08705</Value>
                    </ContactCard>
                    <ContactCard href="https://instagram.com/uniago" target="_blank" color={cor3}>
                        <Icon>📸</Icon>
                        <Label>Instagram</Label>
                        <Value color={cor2}>@uniago</Value>
                    </ContactCard>
                </Grid>
            </Content>
        </Secao>
    )
}
