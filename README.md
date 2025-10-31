# Plataforma Front-End: "Frente Solidária"

## 1. Resumo do Projeto

A plataforma "Frente Solidária" é um projeto *full-stack* (com foco em front-end) que simula um sistema de gerenciamento web profissional para Organizações Não Governamentais. O objetivo é fornecer uma ferramenta de alta performance, acessível (padrão WCAG 2.1 AA) e responsiva, permitindo que a ONG gerencie projetos, capte doações e engaje voluntários.

**Status do Projeto:**  Concluído (Entrega IV/IV).

---

## 2. Stack de Tecnologias (Tech Stack)

Este projeto foi construído com as tecnologias mais modernas do ecossistema front-end, com foco total em HTML, CSS e JavaScript puros (Vanilla JS), sem o uso de *frameworks*.

* **HTML5:** Estruturação semântica e atributos ARIA para máxima acessibilidade.
* **CSS3:** *Design System* completo baseado em Variáveis CSS (para *theming* e Modo Escuro), layouts responsivos com Flexbox e CSS Grid.
* **JavaScript (ES6+):** Manipulação avançada do DOM, modularização, programação assíncrona (`fetch`, `async/await`), gerenciamento de estado local (`LocalStorage`) e eventos.
* **APIs:**
    * **ViaCEP:** Integração de API externa para preenchimento automático de endereço no formulário.
    * **API Fictícia (Local):** Carregamento dinâmico de conteúdo (cards de projeto) a partir de um arquivo `projetos.json` local, simulando o consumo de um *endpoint* de API.

---

## 3. Principais Funcionalidades (Features)

### 3.1. Design e UX
* **Layout Responsivo (Mobile-First):** Interface fluida que se adapta perfeitamente a *desktops*, *tablets* e *smartphones*.
* **Sistema de Design Consistente:** Todos os componentes (botões, *cards*, formulários) seguem as variáveis globais de cor, espaçamento e tipografia.
* **Componentes Interativos:**
    * Menu "hambúrguer" responsivo.
    * Modal de Doação (pop-up).
    * Botão "Voltar ao Topo" com rolagem suave (`scroll-behavior: smooth`).

### 3.2. Acessibilidade (WCAG 2.1 Nível AA)
* **Modo Escuro / Alto Contraste:** Interruptor Sol/Lua que altera o tema do site e salva a preferência do usuário no `LocalStorage`.
* **Navegação Completa por Teclado:** O site é 100% navegável usando `Tab`, com indicadores de foco (`:focus-visible`) claros e lógicos.
* **Suporte a Leitores de Tela:** Uso correto de atributos ARIA (`aria-label`, `aria-hidden`, `role="dialog"`, etc.) e semântica HTML para garantir uma experiência rica para tecnologias assistivas (ex: o foco é gerenciado automaticamente ao abrir/fechar o modal).

### 3.3. Performance e Lógica
* **Carregamento Assíncrono:** Os projetos são carregados dinamicamente usando a API `fetch()`, permitindo que a página seja renderizada sem bloquear o conteúdo.
* **Validação de Formulário Avançada:**
    * **API ViaCEP:** Preenchimento automático de endereço ao digitar o CEP.
    * **Validação de CPF:** Algoritmo de JS que valida matematicamente o dígito verificador do CPF no *submit* do formulário.
    * **Máscaras de Input:** Formatação em tempo real dos campos de CPF, CEP e Telefone.

---

## 4. Fluxo de Trabalho Git (GitFlow)

O desenvolvimento deste projeto seguiu um fluxo de trabalho profissional baseado no **GitFlow**:
1.  O ramo `main` foi protegido, servindo apenas como a versão de produção.
2.  Cada Entrega (CSS, JS, Acessibilidade) foi desenvolvida em **`feature-branches`** separadas (ex: `feature/entrega-ii-css`).
3.  Todo o código só foi integrado ao `main` após a conclusão, através de **Pull Requests (PRs)**, simulando um processo de *Code Review*.
4.  O versionamento segue o padrão Semântico (ex: `v1.0.0`).

---

## 5. Como Executar o Projeto Localmente

Este projeto utiliza a API `fetch()` para carregar arquivos locais (ex: `data/projetos.json`). Devido à política de segurança (CORS) dos navegadores, ele **não funcionará** se o `index.html` for aberto diretamente do sistema de arquivos (`file:///`).

**É obrigatório executá-lo a partir de um servidor local.**

**Instruções (Recomendado: VS Code + Live Server):**
1.  Clone este repositório: `git clone https://github.com/angeloconrado/projeto-ong.git`
2.  No VS Code, instale a extensão **"Live Server"** (de Ritwick Dey).
3.  Clique com o botão direito no arquivo `index.html`.
4.  Selecione **"Open with Live Server"**.
5.  O projeto será aberto no seu navegador no endereço `http://127.0.0.1:5500`.

---

## 6. Autor

* **Nome:** Angelo Sebastiao Robadel Conrado
* **RGM:** 46391193