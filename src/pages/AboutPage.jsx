import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import styled, { keyframes } from "styled-components"
import { MyContext } from "../context"

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
`

const Page = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 80px 20px;
    animation: ${fadeUp} 0.6s ease forwards;
`

const Back = styled(Link)`
    color: #94a3b8;
    text-decoration: none;
    font-size: 14px;
    display: inline-block;
    margin-bottom: 32px;
    transition: color 0.3s;
    &:hover { color: ${props => props.color}; }
`

const Title = styled.h1`
    font-size: 36px;
    font-weight: 800;
    color: ${props => props.color};
    margin: 0 0 8px 0;
    span { color: ${props => props.spanColor}; }
`

const Sub = styled.p`
    color: #94a3b8;
    font-size: 16px;
    margin-bottom: 48px;
`

const Section = styled.div`
    margin-bottom: 48px;
`

const SectionTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.color};
    margin: 0 0 20px 0;
    span { color: ${props => props.spanColor}; }
`

const Bio = styled.p`
    color: #94a3b8;
    font-size: 16px;
    line-height: 1.9;
    margin: 0 0 20px 0;

    strong { color: ${props => props.color}; }
`

const hexToRgba = (hex, alpha) => {
    if (!hex) return `rgba(88, 216, 81, ${alpha})`
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const ExpCard = styled.div.attrs(props => ({
    style: {
        backgroundImage: props.$active
            ? `radial-gradient(400px circle at ${props.$x}px ${props.$y}px, ${hexToRgba(props.$borderColor, 0.12)}, transparent 60%)`
            : 'none',
    },
}))`
    background-color: rgba(15, 23, 42, 0.527);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 16px;
    cursor: default;
    transition: border-color 0.3s, transform 0.3s;
    position: relative;
    overflow: hidden;

    &:hover {
        border-color: ${props => props.$borderColor};
        transform: translateY(-4px);
    }
`

function ExpCardComp({ period, title, company, desc, color }) {
    const { cor2 } = useContext(MyContext)
    const [mouse, setMouse] = useState({ x: 0, y: 0, active: false })

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true })
    }

    const handleLeave = () => setMouse(prev => ({ ...prev, active: false }))

    return (
        <ExpCard
            $x={mouse.x} $y={mouse.y} $active={mouse.active}
            $borderColor={color}
            onMouseMove={handleMove} onMouseLeave={handleLeave}
        >
            <div style={{ fontSize: '13px', color, fontWeight: 600, marginBottom: '8px' }}>{period}</div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: cor2, margin: '0 0 4px 0' }}>{title}</h4>
            <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>{company}</div>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{desc}</p>
        </ExpCard>
    )
}

const Interesses = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`

const Interesse = styled.span`
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid ${props => props.color}33;
    color: #cbd5e1;
    padding: 8px 18px;
    border-radius: 50px;
    font-size: 14px;
    transition: all 0.3s;

    &:hover {
        border-color: ${props => props.color};
        background-color: ${props => props.color}11;
        transform: translateY(-2px);
    }
`

export default function AboutPage() {
    const { cor2, cor3 } = useContext(MyContext)

    const interesses = [
        "☕ Café", "👨‍💻 Programação", "📊 Logística",
        "🎸 Pop Punk", "🌊 Salvador", "💍 Casamento 2027"
    ]

    return (
        <Page>
            <Back to="/" color={cor3}>← Voltar para Home</Back>
            <Title color={cor2} spanColor={cor3}>Sobre <span>Mim</span></Title>
            <Sub>Um pouco da minha história, trabalho e o que me move.</Sub>

            <Section>
                <SectionTitle color={cor2} spanColor={cor3}>👨‍💼 Quem <span>sou</span></SectionTitle>
                <Bio color={cor2}>
                    Trabalho como <strong>Supervisor de Operações</strong> em uma distribuidora 
                    de produtos estéticos em Salvador/BA. No dia a dia, cuido da gestão de estoque, 
                    separação de pedidos, rotas de entrega e coordenação da equipe.
                </Bio>
                <Bio color={cor2}>
                    Paralelamente, sou <strong>desenvolvedor fullstack</strong> — crio sistemas que 
                    resolvem problemas reais da empresa onde trabalho. Já construí desde dashboards 
                    executivos (React + Recharts) até sistemas logísticos completos com backend 
                    Node.js/Python, frontend web e mobile (React Native) e MongoDB.
                </Bio>
                <Bio color={cor2}>
                    Acredito que o melhor código é aquele que <strong>resolve um problema real</strong>. 
                    Não tenho medo de botar a mão na massa, aprender na prática e fazer deploy em produção.
                </Bio>
            </Section>

            <Section>
                <SectionTitle color={cor2} spanColor={cor3}>💼 <span>Experiência</span></SectionTitle>
                <ExpCardComp
                    period="Atualmente"
                    title="Supervisor / Gerente de Operações"
                    company="IL Produtos Estéticos"
                    desc="Gestão de operações logísticas: estoque, separação, rotas de entrega e equipe."
                    color={cor3}
                />
                <ExpCardComp
                    period="2025 — Atualmente"
                    title="Desenvolvedor Fullstack"
                    company="Freelancer / Projetos Próprios"
                    desc="Sistemas de logística, análises, projeções de demanda e faturamento. React, Node.js, Python, MongoDB."
                    color={cor3}
                />
            </Section>

            <Section>
                <SectionTitle color={cor2} spanColor={cor3}>🎯 <span>Interesses</span></SectionTitle>
                <Interesses>
                    {interesses.map((i, idx) => (
                        <Interesse key={idx} color={cor3}>{i}</Interesse>
                    ))}
                </Interesses>
            </Section>
            <Footer />
        </Page>
    )
}
