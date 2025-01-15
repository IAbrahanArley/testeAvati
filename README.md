# Projeto de Login com Dashboard

Este é um projeto simples de login com uma tela de **Dashboard** que é acessada após um login bem-sucedido. O projeto utiliza **HTML**, **CSS** (com **Tailwind CSS**) e **JavaScript** para a interação do usuário.

## Estrutura do Projeto


## Como Usar
### Opção 1: Acessar o link:
https://iabrahanarley.github.io/testeAvati/

### Opção 2: Abrir Diretamente no Navegador

1. Navegue até o diretório onde os arquivos estão localizados.
2. Abra o arquivo `index.html` diretamente no seu navegador.
   - Você pode fazer isso clicando duas vezes sobre o arquivo `index.html` ou clicando com o botão direito e selecionando **"Abrir com"** e escolhendo o navegador de sua preferência.
   
### Opção 3: Usar o Live Server (Recomendado para Testes)

1. Abra o **Visual Studio Code** (VSCode) no diretório do projeto.
2. Instale a extensão **Live Server**:
   - No VSCode, vá até a aba de **Extensões** (Ctrl+Shift+X) e pesquise por **Live Server**.
   - Clique em **Instalar**.
3. Após a instalação, clique com o botão direito sobre o arquivo `index.html` no VSCode e selecione **"Open with Live Server"**.
4. O navegador será aberto automaticamente com a aplicação rodando em um servidor local.

### Fluxo do Projeto

1. **Tela de Login**: O usuário deve inserir um e-mail e uma senha.
   - E-mail: Deve ser um e-mail válido.
   - Senha: Deve ter pelo menos 6 caracteres.
2. **Login Bem-Sucedido**: Após um login bem-sucedido, o usuário será redirecionado para a tela de **Dashboard**.
3. **Tela de Dashboard**: Após o login, o usuário verá uma mensagem de boas-vindas.
4. **Logout**: O botão **"Sair"** redireciona o usuário de volta à tela de **Login**.

### Como Funciona?

- Quando o usuário clica em "Entrar" na tela de login, o sistema valida os campos. Se os campos forem válidos, ele é redirecionado para o `dashboard.html`.
- Na tela do Dashboard, o usuário pode clicar em **Sair**, o que o levará de volta para a tela de login.

## Tecnologias Usadas

- **HTML** para estruturação da página.
- **Tailwind CSS** para estilização.
- **JavaScript** para lógica de login e redirecionamento de páginas.

