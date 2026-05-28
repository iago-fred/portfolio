import { createContext, useState } from "react";

export const MyContext = createContext()

const PROJECTS = [
    {
        id: "il-dashboard",
        title: "IL Dashboard",
        tag: "Dashboard Executivo",
        desc: "Dashboard em produção para gestão de vendas, operação e suprimentos de distribuidora de produtos estéticos. React 19 + Recharts + Vite + Vercel.",
        tech: ["React", "Vite", "Recharts", "React Router", "Vercel"],
        highlights: [
            "Gráficos interativos de vendas",
            "Previsão de demanda com Prophet (ML)",
            "1.097 produtos gerenciados",
            "Deploy automático na Vercel"
        ],
        link: "https://il-dashboard-eight.vercel.app",
        github: "https://github.com/iago-fred/IL-Dashboard"
    },
    {
        id: "il-separacao",
        title: "IL Separação",
        tag: "Sistema Logístico",
        desc: "Ecossistema completo para gestão de pedidos, separação, conferência e rotas de entrega — multiplataforma com app mobile para entregadores.",
        tech: ["Node.js", "React", "React Native", "Python", "MongoDB"],
        highlights: [
            "Backend Node.js + Python (FastAPI)",
            "Frontend Web + Mobile (Expo)",
            "Socket.IO em tempo real",
            "4 entregadores em produção"
        ],
        link: "https://il-separacao.vercel.app",
        github: "https://github.com/iago-fred/IL-Separacao"
    },
    {
        id: "secretary-il",
        title: "Secretary IL",
        tag: "Bot com IA",
        desc: "Bot inteligente que monitora grupos de WhatsApp e interpreta pedidos automaticamente, eliminando a digitação manual.",
        tech: ["Node.js", "React", "WhatsApp Web"],
        highlights: [
            "Automação de pedidos via WhatsApp",
            "Integração em tempo real",
            "Interpretação com IA",
            "Elimina digitação manual"
        ],
        link: null,
        github: "https://github.com/iago-fred/secretary-il"
    },
    {
        id: "lucas-vital",
        title: "Lucas R. Vital Advogados",
        tag: "Landing Page",
        desc: "Landing page para escritório de advocacia — meu primeiro projeto React, com design responsivo e carrossel customizado.",
        tech: ["React", "Vite", "styled-components"],
        highlights: [
            "Primeiro projeto React do zero",
            "Carrossel customizado",
            "Design responsivo",
            "Styled-components"
        ],
        link: "https://lucas-vital-iago-fredericks-projects.vercel.app",
        github: "https://github.com/iago-fred/lucas-vital"
    }
]

export function MyProvider({ children }) {
    const cor1 = "#0b0b0b"
    const cor2 = "#e2e2e2"
    const cor3 = "#58d851"

    const NAV_PAGS = [
        { txt: "Home", id: "hero" },
        { txt: "Trabalhos", id: "projects" },
        { txt: "Sobre mim", id: "about" }
    ]

    const [tela, setTela] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1200
    )

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }

    const value = {
        cor1, cor2, cor3,
        nav: NAV_PAGS,
        tela, setTela,
        projects: PROJECTS,
        scrollTo
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}
