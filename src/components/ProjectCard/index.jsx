import { useState, useContext } from 'react'
import styled from "styled-components"
import { MyContext } from "../../context"

const CardBg = styled.div.attrs(props => ({
    style: {
        backgroundImage: props.$active
            ? `radial-gradient(500px circle at ${props.$x}px ${props.$y}px, rgba(88,216,81,0.12), transparent 60%)`
            : 'none',
    },
}))`
    background-color: #111111;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 32px;
    transition: border-color 0.3s ease, transform 0.3s ease;
    cursor: default;
    position: relative;
    overflow: hidden;

    &:hover {
        border-color: ${props => props.$borderColor};
        transform: translateY(-4px);
    }
`

const Tag = styled.span`
    background-color: ${props => props.color}22;
    color: ${props => props.color};
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: inline-block;
    margin-bottom: 16px;
`

const Title = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: ${props => props.color};
    margin: 0 0 12px 0;
`

const Desc = styled.p`
    font-size: 14px;
    color: #94a3b8;
    line-height: 1.7;
    margin: 0 0 20px 0;
`

const Techs = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
`

const Tech = styled.span`
    background-color: rgba(255, 255, 255, 0.05);
    color: #94a3b8;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
`

const Highlights = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
`

const Item = styled.li`
    color: #cbd5e1;
    font-size: 14px;
    padding: 5px 0 5px 18px;
    position: relative;
    line-height: 1.5;

    &::before {
        content: '▸';
        position: absolute;
        left: 0;
        color: ${props => props.color};
    }
`

const Links = styled.div`
    display: flex;
    gap: 16px;
`

const Link = styled.a`
    color: ${props => props.color};
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid ${props => props.color}44;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${props => props.color}22;
        border-color: ${props => props.color};
    }
`

export default function ProjectCard({ project }) {
    const { cor3 } = useContext(MyContext)
    const [mouse, setMouse] = useState({ x: 0, y: 0, active: false })

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true
        })
    }

    const handleLeave = () => setMouse(prev => ({ ...prev, active: false }))

    return (
        <CardBg
            $x={mouse.x}
            $y={mouse.y}
            $active={mouse.active}
            $borderColor={cor3}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
        >
            <Tag color={cor3}>{project.tag}</Tag>
            <Title color="#e2e2e2">{project.title}</Title>
            <Desc>{project.desc}</Desc>
            <Techs>
                {project.tech.map(t => (
                    <Tech key={t}>{t}</Tech>
                ))}
            </Techs>
            <Highlights>
                {project.highlights.map((h, i) => (
                    <Item key={i} color={cor3}>{h}</Item>
                ))}
            </Highlights>
            <Links>
                {project.link && (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" color={cor3}>
                        🔗 Acessar
                    </Link>
                )}
                <Link href={project.github} target="_blank" rel="noopener noreferrer" color={cor3}>
                    💻 GitHub
                </Link>
            </Links>
        </CardBg>
    )
}
