import styled from "styled-components"

const Wrap = styled.div`
    margin-bottom: 48px;
`

const Track = styled.div`
    display: flex;
    gap: 18px;
    overflow-x: auto;
    padding: 6px 4px 18px;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.12) transparent;

    &::-webkit-scrollbar {
        height: 6px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.03);
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
    }
`

const Item = styled.figure`
    margin: 0;
    flex: 0 0 auto;
    width: 190px;
    scroll-snap-align: start;
`

const Phone = styled.div`
    position: relative;
    border-radius: 26px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    background-color: #0b0b0b;
    padding: 7px;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.02);
    transition: transform 0.3s ease, border-color 0.3s ease;

    &:hover {
        transform: translateY(-6px);
        border-color: ${props => props.$color}88;
    }
`

const Img = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 20px;
    background-color: #000;
`

const Cap = styled.figcaption`
    margin-top: 10px;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    color: #cbd5e1;
`

const CapSub = styled.span`
    display: block;
    margin-top: 2px;
    font-size: 11px;
    font-weight: 400;
    color: #64748b;
`

export default function AppGallery({ screens = [], color = "#58d851" }) {
    if (!screens || screens.length === 0) return null

    return (
        <Wrap>
            <Track>
                {screens.map((s, i) => (
                    <Item key={i}>
                        <Phone $color={color}>
                            <Img
                                src={s.src}
                                alt={s.alt || s.caption || `Tela do app ${i + 1}`}
                                loading="lazy"
                            />
                        </Phone>
                        {s.caption && (
                            <Cap>
                                {s.caption}
                                {s.hint && <CapSub>{s.hint}</CapSub>}
                            </Cap>
                        )}
                    </Item>
                ))}
            </Track>
        </Wrap>
    )
}
