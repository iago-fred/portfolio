import { useContext, useState } from "react"
import Footer from "../components/Footer"
import AppGallery from "../components/AppGallery"
import WebGallery from "../components/WebGallery"
import { useParams, Link } from "react-router-dom"
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

const Tag = styled.span`
    background-color: ${props => props.color}22;
    color: ${props => props.color};
    padding: 4px 8px;
    margin-left: 8px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: inline-block;
    margin-bottom: 16px;
`

const Title = styled.h1`
    font-size: 36px;
    font-weight: 800;
    color: ${props => props.color};
    margin: 0 0 8px 0;
`

const Meta = styled.div`
    display: flex;
    gap: 20px;
    color: #64748b;
    font-size: 14px;
    margin-bottom: 32px;

    span { color: ${props => props.color}; }
`

const Desc = styled.p`
    color: #94a3b8;
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 40px;
    white-space: pre-line;
`

const SectionTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.color};
    margin: 0 0 16px 0;
`

const Techs = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 40px;
`

const Tech = styled.span`
    background-color: rgba(255, 255, 255, 0.05);
    color: #94a3b8;
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.06);
`

const HighlightList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 48px 0;
`

const HighlightItem = styled.li`
    color: #cbd5e1;
    font-size: 15px;
    padding: 10px 0 10px 24px;
    position: relative;
    line-height: 1.5;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);

    &::before {
        content: '▸';
        position: absolute;
        left: 0;
        color: ${props => props.color};
    }
`

const CuriosidadeCard = styled.div`
    background-color: rgba(15, 23, 42, 0.527);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 20px 24px;
    margin-bottom: 12px;
    transition: border-color 0.3s, transform 0.3s;
    cursor: default;
    position: relative;
    overflow: hidden;

    &:hover {
        border-color: ${props => props.color}66;
        transform: translateX(6px);
    }
`

const CuriosidadeText = styled.p`
    color: #cbd5e1;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
`

const Step = styled.li`
    color: #cbd5e1;
    font-size: 15px;
    line-height: 1.65;
    padding: 12px 0 12px 46px;
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);

    &::before {
        content: attr(data-n);
        position: absolute;
        left: 0;
        top: 10px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 700;
        color: ${props => props.color};
        background-color: ${props => props.color}22;
        border: 1px solid ${props => props.color}55;
    }
`

const StepList = styled.ol`
    list-style: none;
    padding: 0;
    margin: 0 0 48px 0;
`

const DecCard = styled.div`
    background-color: rgba(15, 23, 42, 0.527);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 18px 22px;
    margin-bottom: 12px;
    transition: border-color 0.3s, transform 0.3s;

    &:hover {
        border-color: ${props => props.color}66;
        transform: translateX(6px);
    }
`

const DecTitle = styled.h3`
    color: ${props => props.color};
    font-size: 15px;
    font-weight: 700;
    margin: 0 0 6px 0;
`

const DecText = styled.p`
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.7;
    margin: 0;
`

const Resultado = styled.div`
    background: linear-gradient(135deg, ${props => props.color}14, transparent);
    border: 1px solid ${props => props.color}44;
    border-radius: 12px;
    padding: 22px 24px;
    margin-bottom: 12px;
`

const ResultadoText = styled.p`
    color: #e2e2e2;
    font-size: 16px;
    line-height: 1.75;
    margin: 0;
`

const Links = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 48px;
    flex-wrap: wrap;
`

const LinkBtn = styled.a`
    color: ${props => props.color};
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 50px;
    border: 1px solid ${props => props.color}44;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${props => props.color}22;
        border-color: ${props => props.color};
        transform: translateY(-2px);
    }
`

export default function ProjectPage() {
    const { id } = useParams()
    const { cor2, cor3, getProject } = useContext(MyContext)
    const project = getProject(id)

    if (!project) {
        return (
            <Page>
                <Back to="/" color={cor3}>← Voltar</Back>
                <Title color={cor2}>Projeto não encontrado</Title>
            </Page>
        )
    }

    return (
        <Page>
            <Back to="/" color={cor3}>← Voltar para Home</Back>
            <Tag color={cor3}>{project.tag}</Tag>
            <Title color={cor2}>{project.title}</Title>
            <Meta color={cor3}>
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.role}</span>
            </Meta>
            <Desc>{project.longDesc}</Desc>

            {project.problema && project.problema.length > 0 && (
                <>
                    <SectionTitle color={cor3}>🎯 O problema</SectionTitle>
                    <HighlightList>
                        {project.problema.map((p, i) => (
                            <HighlightItem key={i} color={cor3}>{p}</HighlightItem>
                        ))}
                    </HighlightList>
                </>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
                <>
                    <SectionTitle color={cor3}>{project.screenshotsTitle || "📱 O app dos entregadores"}</SectionTitle>
                    {project.screenshotsKind === 'web'
                        ? <WebGallery screens={project.screenshots} color={cor3} />
                        : <AppGallery screens={project.screenshots} color={cor3} />}
                </>
            )}

            {project.comoFunciona && project.comoFunciona.length > 0 && (
                <>
                    <SectionTitle color={cor3}>⚙️ Como funciona</SectionTitle>
                    <StepList>
                        {project.comoFunciona.map((s, i) => (
                            <Step key={i} color={cor3} data-n={i + 1}>{s}</Step>
                        ))}
                    </StepList>
                </>
            )}

            <SectionTitle color={cor3}>🛠️ Stack</SectionTitle>
            <Techs>
                {project.tech.map(t => (
                    <Tech key={t}>{t}</Tech>
                ))}
            </Techs>

            <SectionTitle color={cor3}>✨ Destaques</SectionTitle>
            <HighlightList>
                {project.highlights.map((h, i) => (
                    <HighlightItem key={i} color={cor3}>{h}</HighlightItem>
                ))}
            </HighlightList>

            {project.decisoes && project.decisoes.length > 0 && (
                <>
                    <SectionTitle color={cor3}>🧭 Decisões de arquitetura</SectionTitle>
                    {project.decisoes.map((d, i) => (
                        <DecCard key={i} color={cor3}>
                            <DecTitle color={cor3}>{d.titulo}</DecTitle>
                            <DecText>{d.texto}</DecText>
                        </DecCard>
                    ))}
                </>
            )}

            <SectionTitle color={cor3}>💡 Curiosidades</SectionTitle>
            {project.curiosidades.map((c, i) => (
                <CuriosidadeCard key={i} color={cor3}>
                    <CuriosidadeText>{c}</CuriosidadeText>
                </CuriosidadeCard>
            ))}

            {project.resultado && (
                <>
                    <SectionTitle color={cor3}>📈 Resultado</SectionTitle>
                    <Resultado color={cor3}>
                        <ResultadoText>{project.resultado}</ResultadoText>
                    </Resultado>
                </>
            )}

            <Links>
                {project.link && (
                    <LinkBtn href={project.link} target="_blank" color={cor3}>
                        🔗 Acessar Projeto
                    </LinkBtn>
                )}
                {project.github && (
                    <LinkBtn href={project.github} target="_blank" color={cor3}>
                        💻 Ver Código no GitHub
                    </LinkBtn>
                )}
            </Links>
            <Footer />
        </Page>
    )
}
