# 🎮 WordQuest

WordQuest é um jogo de **adivinhação de palavras** desenvolvido com **React + TypeScript**, inspirado em jogos casuais de puzzle.  
O objetivo é descobrir a palavra correta com base em uma dica de categoria, acumulando pontos a cada rodada concluída com sucesso.

O projeto foi pensado com foco em:
- **UX mobile-first**
- **Interface limpa e responsiva**
- **Experiência fluida entre rodadas**
- **Suporte completo ao português (acentos e cedilha)**

---

## 🖼️ Preview

> Interface mobile com painel central, HUD de pontuação e transições suaves entre rodadas.

---

## 🚀 Funcionalidades

- 🎯 Sistema de rodadas com palavras aleatórias
- 🧠 Categorias dinâmicas (animais, frutas, países, profissões, etc.)
- ✍️ Entrada de letras com validação
- 🔠 Suporte a acentos e cedilha (`á, ã, ç, ê`, etc.)
- ❌ Controle de tentativas
- ⭐ Sistema de pontuação
- ⏳ Loading animado entre rodadas
- 🧱 Layout responsivo (mobile e desktop)
- 🎨 UI isolada do background para melhor legibilidade

---

## 🧰 Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **CSS puro (sem bibliotecas externas)**
- **Unicode Normalization (NFD)** para tratamento de acentos

---

## 📁 Estrutura do Projeto

src/
├── components/
│ ├── StartScreen.tsx
│ ├── Game.tsx
│ └── GameOver.tsx
├── data/
│ └── words.ts
├── utils/
│ └── normalizer.ts
├── App.tsx
├── main.tsx
└── index.css

▶️ Como Executar o Projeto
Pré-requisitos

Node.js 18+

npm ou pnpm

Instalação
npm install


ou

pnpm install

Rodar em desenvolvimento
npm run dev


ou

pnpm dev


A aplicação estará disponível em:

http://localhost:5173