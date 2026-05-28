import { useContext, useState } from "react"
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
    max-width: 900px;
    width: 100%;
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.color};
    text-align: center;
    margin: 0 0 48px 0;
    
    span {
        color: ${props => props.spanColor};
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;

    @media (max-width: 780px) {
        grid-template-columns: 1fr;
    }
`

const TextBlock = styled.div`
    p {
        color: #94a3b8;
        font-size: 15px;
        line-height: 1.9;
        margin: 0 0 20px 0;
    }

    strong {
        color: ${props => props.color};
    }
`

const hexToRgba = (hex, alpha) => {
    if (!hex) return `rgba(88, 216, 81, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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
    cursor: default;
    margin-bottom: 16px;
    transition: border-color 0.3s, transform 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        border-color: ${props => props.$borderColor};
        transform: translateY(-4px);
    }
`

function ExperienceCard({ period, title, company, desc, color, cor2 }) {
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
        <ExpCard
            $x={mouse.x}
            $y={mouse.y}
            $active={mouse.active}
            $borderColor={color}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Period color={color}>{period}</Period>
            <ExpTitle color={cor2}>{title}</ExpTitle>
            <ExpCompany>{company}</ExpCompany>
            <ExpDesc>{desc}</ExpDesc>
        </ExpCard>
    )
}

const Period = styled.div`
    font-size: 13px;
    color: ${props => props.color};
    font-weight: 600;
    margin-bottom: 8px;
`

const ExpTitle = styled.h4`
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.color};
    margin: 0 0 4px 0;
`

const ExpCompany = styled.div`
    font-size: 14px;
    color: #94a3b8;
    margin-bottom: 8px;
`

const ExpDesc = styled.p`
    font-size: 13px;
    color: #64748b;
    line-height: 1.6;
    margin: 0;
`

export default function About() {
    const { cor2, cor3 } = useContext(MyContext)

    return (
        <Secao id="about">
            <Content>
                <Title color={cor2} spanColor={cor3}>Sobre <span>Mim</span></Title>
                <Grid>
                    <TextBlock color={cor2}>
                        <p>
                            Trabalho como <strong>Supervisor de Operações</strong> em uma distribuidora
                            de produtos estéticos, onde também desenvolvo sistemas de logística,
                            análises e projeções que otimizam o dia a dia da empresa.
                        </p>
                        <p>
                            Como desenvolvedor <strong>fullstack</strong>, construí desde dashboards
                            executivos (React + Recharts + Vercel) até sistemas logísticos completos
                            com backend em Node.js/Python, frontend web e mobile (React Native),
                            e banco de dados MongoDB.
                        </p>
                        <p>
                            Apaixonado por café, códigos que resolvem problemas reais,
                            e <strong style={{ color: cor3 }}>casando em 2027</strong> com a Jéssica 💍
                        </p>
                    </TextBlock>
                    <div>
                        <ExperienceCard
                            period="Atualmente"
                            title="Supervisor / Gerente de Operações"
                            company="IL Produtos Estéticos"
                            desc="Gestão de operações logísticas: estoque, separação, rotas de entrega e equipe."
                            color={cor3}
                            cor2={cor2}
                        />
                        <ExperienceCard
                            period="2025 — Atualmente"
                            title="Desenvolvedor Fullstack"
                            company="Freelancer / Projetos Próprios"
                            desc="Sistemas de logística, análises, projeções de demanda e faturamento. React, Node.js, Python, MongoDB."
                            color={cor3}
                            cor2={cor2}
                        />
                    </div>
                </Grid>
            </Content>
        </Secao>
    )
}
