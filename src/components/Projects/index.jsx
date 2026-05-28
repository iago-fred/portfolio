import { useContext } from "react"
import styled, { keyframes } from "styled-components"
import { MyContext } from "../../context"
import ProjectCard from "../ProjectCard"

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(40px); }
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
    max-width: 1100px;
    width: 100%;
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.color};
    text-align: center;
    margin: 0 0 12px 0;
`

const Sub = styled.p`
    color: #94a3b8;
    text-align: center;
    font-size: 16px;
    margin: 0 0 48px 0;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
`

export default function Projects() {
    const { cor2, cor3, projects, tela } = useContext(MyContext)

    return (
        <Secao id="projects">
            <Content>
                <Title color={cor2}>Projetos em <span style={{color: cor3}}>Produção</span></Title>
                <Sub>Sistemas reais que rodam no dia a dia de uma distribuidora.</Sub>
                <Grid>
                    {projects.map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </Grid>
            </Content>
        </Secao>
    )
}
