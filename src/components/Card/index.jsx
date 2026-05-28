import React, { useState } from 'react';
import styled from "styled-components";

// 1. Defina o Styled Component FORA do componente funcional para evitar 
// que ele seja recriado em cada renderização.
const Fundo = styled.div.attrs(props => ({
  style: {
    // Usamos background-image para não sobrescrever a background-color fixa
    backgroundImage: props.$active
      ? `radial-gradient(600px circle at ${props.$x}px ${props.$y}px, rgba(255,255,255,0.15), transparent 80%)`
      : 'none',
  },
}))`
  width: 80%;
  height: 400px;
  background-color: #1a1a1a; /* Cor de fundo escura para o efeito brilhar */
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background 0.3s ease; /* Transição suave ao sair */
`;

export default function Card() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    // Usamos o prefixo $ (Transient Props) para o styled-components 
    // saber que essas props não devem ir para a tag HTML final.
    <Fundo
      $x={mousePos.x}
      $y={mousePos.y}
      $active={mousePos.active}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h1>Mova o mouse aqui</h1>
    </Fundo>
  );
}