# 🦷 Dra. Daniele Campos - Clínica Odontológica

Um website institucional moderno, rápido e responsivo desenvolvido para a clínica odontológica da Dra. Daniele Campos. Focado na excelência da experiência do usuário (UX), alta performance e SEO, este projeto serve como o cartão de visita digital perfeito para atrair e converter pacientes.

---

## 🚀 Sobre o Projeto

Este projeto foi construído utilizando as tecnologias mais modernas do ecossistema web atual. O objetivo principal foi criar uma interface elegante, confiável e interativa que reflita o profissionalismo da clínica, garantindo tempos de carregamento instantâneos e fluidez nas animações.

## ✨ Principais Funcionalidades

- **Design Responsivo & Mobile-First:** Experiência de navegação perfeita em smartphones, tablets e desktops.
- **Animações Fluidas:** Transições de tela e revelações de conteúdo elegantes que engajam o usuário.
- **Formulários Otimizados:** Formulário de contato/agendamento com validação em tempo real.
- **Carrossel Interativo:** Galeria de fotos da clínica e de sorrisos utilizando touch e swipe fluídos.
- **Acessibilidade:** Semântica HTML estruturada, suporte a navegação por teclado e contraste ideal de cores.
- **SEO Otimizado:** Metadados estruturados, links limpos e uso de Server-Side Rendering (SSR) nativo.

## 💻 Tecnologias e Arquitetura

Este projeto foi construído sobre uma base sólida, escalável e de altíssima performance:

**Core:**
- [Next.js 16](https://nextjs.org/) (App Router) - Framework React escolhido para renderização híbrida, rotas eficientes e otimização automática de imagens.
- [React 19](https://react.dev/) - Última versão da biblioteca de UI, focada em performance e novos hooks.
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática garantindo maior segurança e previsibilidade no código.

**Estilização & UI:**
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework utilitário para estilização ultrarrápida, escalável e design atômico.
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações declarativas e fluidas para os elementos da página.
- [Lucide React](https://lucide.dev/) - Ícones modernos, limpos e super leves.
- [Embla Carousel](https://www.embla-carousel.com/) - Slider de alta performance e leveza.

**Formulários & Lógica:**
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de estado de formulários flexível e sem re-renderizações desnecessárias.

**Infraestrutura & Build:**
- **Turbopack:** Empacotador em Rust, habilitado para máxima velocidade de compilação em produção.
- **Vercel:** Plataforma de Cloud Hosting para entrega via Edge Network, garantindo baixa latência em todo o mundo.

## ⚡ Otimizações de Performance Aplicadas

- **LCP (Largest Contentful Paint) Otimizado:** Imagens acima da dobra (Hero section) carregam utilizando `priority` no `next/image` para máxima pontuação no Core Web Vitals.
- **Prevenção de Hydration Mismatch:** Estruturas DOM protegidas contra injeção de extensões do navegador na primeira renderização, evitando erros de hidratação do React.
- **Polling Personalizado no Webpack:** Suporte customizado integrado para ambientes WSL em desenvolvimento.

## 🛠️ Como Executar Localmente

Para clonar e executar esta aplicação no seu ambiente local, siga os passos:

```bash
# 1. Clone este repositório
$ git clone https://github.com/seu-usuario/dradanielecampos-odonto.git

# 2. Acesse a pasta do projeto
$ cd dradanielecampos-odonto

# 3. Instale as dependências
$ npm install

# 4. Inicie o servidor de desenvolvimento
$ npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---
*Desenvolvido com dedicação para compor o portfólio de excelência em Engenharia de Software e Frontend.*
