# Biblioteca Digital

## 1. Descrição do Projeto

A **Biblioteca Digital** é uma aplicação desenvolvida para modernizar o controle e a gestão de acervos bibliotecários. Anteriormente gerida de forma manual ou via terminal, a plataforma agora oferece uma interface web intuitiva e acessível pelo navegador. 

**O problema que resolve:** 
Atualmente, bibliotecas tradicionais enfrentam dificuldades no controle de seu acervo, tornando a consulta de disponibilidade lenta e o registro de empréstimos e devoluções um trabalho manual e suscetível a erros. A Biblioteca Web digitaliza esse processo, permitindo que administradores e usuários visualizem o acervo, cadastrem novos títulos, controlem empréstimos e devoluções, e consultem estatísticas detalhadas através de painéis visuais. Tudo isso com foco em acessibilidade e responsividade, garantindo uma boa experiência tanto no desktop quanto em dispositivos móveis.

---

## 2. Tecnologias e Técnicas Utilizadas

O projeto foi construído utilizando as bases do desenvolvimento web moderno, sem o uso de frameworks externos para a lógica principal, garantindo a fixação dos conceitos de estruturação, estilização e programação.

*   **HTML5:** Estruturação semântica da aplicação, criação de formulários e layouts acessíveis.
*   **CSS3:** Estilização global e componentizada, uso de Flexbox e CSS Grid, Media Queries para responsividade (Mobile First/Desktop).
*   **JavaScript:** 
    *   Manipulação do DOM e escuta de eventos.
    *   Modularização (import/export) para separação de responsabilidades (classes de Usuário, Livro, lógica de autenticação e estatísticas).
    *   Armazenamento de dados no lado do cliente (`SessionStorage` / simulação de dados em memória).
    *   Lógica de validação de formulários.
    *   Consumo de APIs assíncronas (Promises/async/await).

---

## 3. Estrutura do Projeto

O projeto está organizado de forma modular, separando cada funcionalidade em seu próprio diretório para facilitar a manutenção e escalabilidade:

```text
biblioteca-web/
│
├── login/
│   ├── login.html
│   ├── login.js
│   └── login.css
│
├── dashboard/
│   ├── dashboard.html
│   ├── dashboard.js
│   └── dashboard.css
│
├── cadastro-usuario/
│   ├── cadastro-usuario.html
│   ├── cadastro-usuario.js
│   └── cadastro-usuario.css
│
├── cadastro-livro/
│   ├── cadastro-livro.html
│   ├── cadastro-livro.js
│   └── cadastro-livro.css
│
├── listagem-livro/
│   ├── listagem-livro.html
│   ├── listagem-livro.js
│   └── listagem-livro.css
│
├── css/
│   └── global.css
│
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── estatisticas.js
│   ├── usuarios.js
│   ├── livros.js
│   ├── Usuario.js
│   └── Livro.js
│
├── dados/
│   ├── usuarios-sistema.js
│   ├── livros-cadastrados.js
│   └── usuarios-cadastrados.js
│
└── assets/
    ├── images/
│
├── index.html
├── README.md
└── package.json
```

---

## 4. Como Executar

Por ser uma aplicação web estática baseada em HTML, CSS e JavaScript puro (com uso de módulos), o projeto precisa ser rodado através de um servidor local para que as importações de módulos JS funcionem corretamente.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Ronisank/Biblioteca_Digital.git
    ```
2.  **Abra a pasta do projeto no seu editor de código (ex: VS Code).**
3.  **Inicie um servidor local:**
    *   Se utilizar o **VS Code**, instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
    *   Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
4.  O sistema abrirá automaticamente no seu navegador padrão, geralmente no endereço `http://127.0.0.1:5500`.

---

## 5. Melhorias Futuras (Opcionais)

Embora o sistema seja funcional, a arquitetura permite diversas evoluções:

*   **Integração com Backend e Banco de Dados:** Substituir o armazenamento local/em memória por uma API REST e um banco de dados real (ex: Node.js com PostgreSQL ou MongoDB) para persistência segura dos dados.
*   **Controle de Permissões (RBAC):** Criar perfis diferentes de acesso (Administrador vs. Leitor comum), restringindo áreas como Cadastro Livros apenas a bibliotecários.
*   **Notificações Automáticas:** Implementar disparo de e-mails para alertar os usuários sobre atrasos nas devoluções ou livros que ficaram disponíveis.
*   **Busca Avançada:** Adicionar filtros compostos (por autor, gênero, ano de publicação) e paginação na listagem de livros para lidar com grandes volumes de dados.
