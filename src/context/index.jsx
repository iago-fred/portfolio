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
        screenshots: [
            { src: "/projeto/il-separacao/app/01-login.jpg", caption: "Login do entregador", hint: "Acesso individual por login/senha" },
            { src: "/projeto/il-separacao/app/02-rotas.jpg", caption: "Rotas do dia", hint: "Total de fretes e entregas do dia" },
            { src: "/projeto/il-separacao/app/03-detalhes-rota.jpg", caption: "Detalhes da rota", hint: "Paradas da rota em sequência" },
            { src: "/projeto/il-separacao/app/04-detalhes-entrega.jpg", caption: "Detalhes da entrega", hint: "Cliente, endereço e ação de copiar" },
            { src: "/projeto/il-separacao/app/05-finalizar-entrega.jpg", caption: "Finalizar entrega", hint: "Confirmação com foto de comprovante" }
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
        desc: "Sistema que lê pedidos no WhatsApp, interpreta com IA, casa os produtos com o catálogo do ERP e cria o pedido — com um painel onde o humano ensina a IA.",
        longDesc: "O Secretary IL nasceu de um problema operacional bem concreto: os pedidos chegavam pelo WhatsApp de forma totalmente orgânica — sem padrão, com gírias, abreviações e nomes de produto 'do jeito que o cliente fala'. Alguém precisava ler a conversa, interpretar e digitar tudo no sistema. Era lento e, principalmente, gerava erro de digitação.\n\nA ideia foi tirar o humano da digitação — mas mantê-lo no comando. O bot lê a conversa em tempo real, entende a mensagem com IA, casa cada produto com o catálogo oficial e cria o pedido automaticamente. Quando a IA erra, o treinador corrige num painel e explica o porquê — e o bot aprende com essa correção.\n\nMais do que um 'bot de WhatsApp', é um sistema de aprendizado supervisionado aplicado a um problema real de operação: a máquina faz o trabalho pesado, o humano só valida o que importa.",
        tech: ["Node.js", "Baileys", "Python (FastAPI)", "React 19", "PostgreSQL", "CrewAI + LLM", "WebSocket", "Docker"],
        highlights: [
            "Leitura do WhatsApp via Baileys (sessão multi-dispositivo, pareamento por QR)",
            "Extração de pedidos com LLM, com validação de esquema e dos campos",
            "Treino supervisionado: exemplos ✅/❌ + seleção por BM25 e MMR",
            "Casamento de produtos com o catálogo por probabilidade, com apelidos ensinados pelo humano",
            "Envio automático ao sistema por faixa de precisão, com idempotência (sem pedido duplicado)",
            "Painel web em tempo real para treinar, revisar e configurar"
        ],
        problema: [
            "Os pedidos chegavam no WhatsApp sem padrão: gírias, abreviações e nomes de produto do dia a dia",
            "Alguém precisava interpretar e digitar tudo manualmente — lento e sujeito a erro",
            "Não existia ponte entre a conversa e o sistema real de pedidos",
            "Qualquer automação 'burra' (regex) quebraria na primeira variação de escrita"
        ],
        comoFunciona: [
            "Captura — um número dedicado entra como dispositivo conectado (pareamento por QR, com sessão persistida). Cada mensagem nova reinicia um timer curto que agrupa o 'bloco' de mensagens antes de interpretar.",
            "Interpretação — o histórico vira o texto de entrada; um seletor busca no banco de exemplos os casos mais parecidos (similaridade léxica + diversidade) e um LLM devolve o pedido estruturado em JSON.",
            "Casamento — cada produto citado é comparado com TODO o catálogo; o bot escolhe a maior probabilidade de equivalência e, quando fica ambíguo, NÃO chuta: sinaliza para o humano.",
            "Validação — o painel mostra o JSON extraído; o treinador marca certo/errado e escreve uma observação. O pedido aprovado é criado no sistema.",
            "Aprendizado — a observação é interpretada pela IA e vira uma regra (apelido de produto). A cada correção, o bot fica melhor."
        ],
        decisoes: [
            { titulo: "Um único caminho de entrada", texto: "O canal não-oficial (Baileys) e a API oficial da Meta alimentam o MESMO pipeline. Trocar de canal não mexe em nenhuma outra parte — dá pra migrar sem reescrever nada." },
            { titulo: "Humano no meio, não no lugar", texto: "A IA propõe, o humano supervisiona. Em vez de confiar cegamente no modelo, o treino é few-shot dinâmico: os exemplos mais parecidos (e os erros parecidos) entram como contexto a cada leitura." },
            { titulo: "Recuperação sem RAG vetorial", texto: "Seleção de exemplos por BM25 (léxico) + controle de proporção erradas:corretas + MMR (diversidade) + fallback de recência. Simples, barato e eficaz para mensagens curtas de pedido." },
            { titulo: "Casamento por probabilidade, com saída segura", texto: "Score com tokens (tolerando abreviação), números (dose) e o detalhe decisivo 'com/sem' (ex.: vasoconstritor). Abaixo da confiança ou empate técnico → o humano decide. Melhor não enviar do que enviar errado." },
            { titulo: "Anti-duplicação no envio", texto: "O envio ao sistema é idempotente e persistido: a mesma referência nunca vira dois pedidos, mesmo reiniciando o serviço no meio. Se falhar, o pedido fica pendente e tenta de novo." },
            { titulo: "Operação pensada para migrar", texto: "Tudo em Docker (API + WhatsApp + banco + painel), acesso por senha e parâmetros de produção editáveis na própria interface." }
        ],
        resultado: "Antes: alguém digitando pedido por pedido, com erro. Depois: o bot interpreta a conversa e cria o pedido, e o humano só valida e ensina. Menos erro, menos retrabalho e um bot que melhora continuamente com o feedback real do time.",
        curiosidades: [
            "🤖 O bot nasceu porque os pedidos chegavam no WhatsApp sem padrão nenhum — rápido pra vender, mas cheio de erro de digitação",
            "🧠 A grande sacada foi colocar o humano no meio: um painel onde o treinador marca ✅/❌ e explica o erro, e a IA aprende com o exemplo",
            "🔎 O matching de produto compara a mensagem com TODO o catálogo e escolhe a maior probabilidade — e quando fica ambíguo, ele NÃO chuta: chama o treinador",
            "📚 Se o treinador escreve uma explicação (ex.: 'esse nome é o mesmo que X'), o bot aprende semanticamente aquele apelido",
            "🐳 Roda 100% em Docker (API + WhatsApp + banco + painel), pensado pra migrar de servidor sem dor",
            "🔐 Acesso protegido por senha única e envio idempotente (não duplica pedido, mesmo reiniciando o serviço)"
        ],
        screenshotsKind: "web",
        screenshotsTitle: "🖥️ O painel de treinamento",
        screenshots: [
            { src: "/projeto/secretary-il/01-login.jpg", caption: "Acesso ao painel", hint: "Senha única de entrada" },
            { src: "/projeto/secretary-il/02-treino.jpg", caption: "Validação da leitura", hint: "JSON extraído para o treinador validar" },
            { src: "/projeto/secretary-il/03-config.jpg", caption: "Configurações", hint: "Parâmetros reais e regras de envio" },
            { src: "/projeto/secretary-il/04-whatsapp.jpg", caption: "Conexão do WhatsApp", hint: "Sessão conectada por QR" }
        ],
        link: null,
        github: null,
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
