import { createContext, useState } from "react";

export const MyContext = createContext()

const PROJECTS = [
    {
        id: "il-dashboard",
        title: "IL Dashboard",
        tag: "Dashboard Executivo",
        desc: "Dashboard em produção para gestão de vendas, operação e suprimentos de distribuidora de produtos estéticos.",
        longDesc: "O IL Dashboard nasceu da necessidade real de unificar informações que antes ficavam espalhadas entre planilhas, mensagens no WhatsApp e anotações soltas. Hoje ele é a central de informações da distribuidora, com dados atualizados em tempo real.",
        tech: ["React 19", "Vite 8", "Recharts", "React Router 7", "Vercel"],
        highlights: [
            "Gráficos interativos de vendas",
            "Previsão de demanda com Prophet (ML)",
            "1.097 produtos gerenciados",
            "Deploy automático na Vercel"
        ],
        curiosidades: [
            "📐 O layout foi inspirado em dashboards financeiros que eu usava no trabalho",
            "🐛 Um bug do Recharts com Area components fazia o gráfico crashar com dados null — precisei fazer downgrade pra 2.15.4",
            "⚡ O Vite 8 estava em alpha quando comecei — tive que atualizar o @vitejs/plugin-react pra v6",
            "🎯 A previsão de demanda usa Prophet do Facebook, treinado cada vez mais dias de histórico",
            "🚀 O deploy foi feito pela própria Neon (minha assistente IA) via Vercel CLI"
        ],
        link: "https://il-dashboard-eight.vercel.app",
        github: "https://github.com/iago-fred/IL-Dashboard",
        year: "2026",
        role: "Desenvolvedor Fullstack"
    },
    {
        id: "il-separacao",
        title: "IL Separação",
        tag: "Sistema Logístico",
        desc: "Ecossistema completo para gestão de pedidos, separação, conferência e rotas de entrega — multiplataforma com app mobile para entregadores.",
        longDesc: "O IL Separação é a espinha dorsal da operação logística. Antes dele, a separação era feita no papel — pedido impresso, canetinha, e conferência manual. Hoje cada etapa é digital: do pedido no WhatsApp até a foto de comprovante na mão do entregador.",
        tech: ["Node.js", "Express", "React", "React Native (Expo)", "Python FastAPI", "MongoDB", "Socket.IO", "Cloudinary"],
        highlights: [
            "Backend Node.js + Python (FastAPI)",
            "Frontend Web + Mobile (Expo)",
            "Socket.IO em tempo real",
            "Gestão de leitura e criação de código de barras"
        ],
        curiosidades: [
            "📱 O app mobile dos entregadores foi feito em React Native com Expo. Foi meu primeiro app mobile",
            "📸 Cada entrega registra foto de comprovante via Cloudinary",
            "🔊 A aplicação inclui uma funcionalidade para compartilhar o status do pedido, o que resolveu um dos grandes problemas da empresa: a falta de transparência com os clientes.",
            "📦 O banco tem mais de 1.097 produtos cadastrados, cada um com código de barras"
        ],
        link: "https://il-separacao.vercel.app",
        github: "https://github.com/iago-fred/IL-Separacao",
        year: "2026",
        role: "Desenvolvedor Fullstack"
    },
    {
        id: "secretary-il",
        title: "Secretary IL",
        tag: "Bot com IA",
        desc: "Bot inteligente que monitora grupos de WhatsApp e interpreta pedidos automaticamente, eliminando a digitação manual.",
        longDesc: "O Secretary IL veio de um problema real: os pedidos chegavam pelo WhatsApp e alguém precisava copiar manualmente pro sistema. Além de lento, tinha erro de digitação. O bot monitora os grupos, interpreta as mensagens e já cria o pedido no sistema.",
        tech: ["Node.js", "React", "WhatsApp Web", "Puppeteer"],
        highlights: [
            "Automação de pedidos via WhatsApp",
            "Integração em tempo real",
            "Interpretação com IA",
            "Elimina digitação manual"
        ],
        curiosidades: [
            "🤖 O bot nasceu porque o Lenadro (CTO da IL) mandava todos os pedidos pelo WhatsApp de forma extremamente orgânica e sem padrão, o que agilizava a venda mas gerava muitos erros",
            "📝 Antes do bot, alguém passava o dia digitando pedido por pedido",
            "💻 A solução final foi via WhatsApp Web com Chromium headless",
            "⚡ A grande sacada foi um dashboard de treinamento com feedbacks para a IA aprender a interpretar os pedidos"
        ],
        link: null,
        github: "https://github.com/iago-fred/secretary-il",
        year: "2026",
        role: "Desenvolvedor Fullstack"
    },
    {
        id: "lucas-vital",
        title: "Lucas R. Vital Advogados",
        tag: "Landing Page",
        desc: "Landing page para escritório de advocacia — meu primeiro projeto React, com design responsivo e carrossel customizado.",
        longDesc: "Meu primeiro projeto React do zero. Uma landing page de apresentação para um escritório de advocacia, com carrossel de cards, design responsivo e componentes estilizados. Foi o projeto que me ensinou hooks, styled-components e como funciona o deploy front-end.",
        tech: ["React 19", "Vite", "styled-components"],
        highlights: [
            "Primeiro projeto React do zero",
            "Carrossel customizado",
            "Design responsivo",
            "Styled-components"
        ],
        curiosidades: [
            "🚀 Esse foi o projeto que me fez aprender React de verdade — literalmente do zero",
            "🎠 O carrossel foi feito manualmente, sem biblioteca externa",
            "📱 O design responsivo foi um dos maiores desafios (e aprendizados)",
            "🎨 styled-components foi amor à primeira vista — uso até hoje",
            "⭐ Foi meu primeiro deploy front-end, e ver no ar foi uma sensação incrível"
        ],
        link: "https://lucas-vital-iago-fredericks-projects.vercel.app",
        github: "https://github.com/iago-fred/lucas-vital",
        year: "2025",
        role: "Desenvolvedor Fullstack"
    }
]

export function MyProvider({ children }) {
    const cor1 = "#0b0b0b"
    const cor2 = "#e2e2e2"
    const cor3 = "#58d851"

    const NAV_PAGS = [
        { txt: "Home", id: "home" },
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

    const getProject = (id) => PROJECTS.find(p => p.id === id)

    const value = {
        cor1, cor2, cor3,
        nav: NAV_PAGS,
        tela, setTela,
        projects: PROJECTS,
        getProject,
        scrollTo
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}
