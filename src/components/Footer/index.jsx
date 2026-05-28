import { useContext } from "react"
import styled from "styled-components"
import { MyContext } from "../../context"

const Foot = styled.footer`
    width: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
`

const Text = styled.p`
    color: #475569;
    font-size: 14px;
    margin: 0;
`

const Highlight = styled.span`
    color: ${props => props.color};
`

export default function Footer() {
    const { cor3 } = useContext(MyContext)

    return (
        <Foot>
            <Text>
                © 2026 Iago Frederick. Feito com ☕ e <Highlight color={cor3}>código</Highlight>.
            </Text>
        </Foot>
    )
}
