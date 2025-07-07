# 🔐 Gerador de QRCode e Senha

Este é um projeto Node.js que permite gerar QR Codes personalizados e senhas aleatórias com base em parâmetros definidos pelo usuário, diretamente no terminal.

## ✨ Funcionalidades

- ✅ Geração de QR Code com link personalizado
- ✅ Geração de senhas aleatórias com base em variáveis de ambiente:
  - Tamanho da senha
  - Letras maiúsculas
  - Letras minúsculas
  - Números
  - Caracteres especiais
- ✅ Interface de linha de comando simples e intuitiva

## 📦 Dependências

- [`chalk`](https://www.npmjs.com/package/chalk) – Formatação colorida no terminal
- [`prompt`](https://www.npmjs.com/package/prompt) – Coleta de input do usuário via terminal
- [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal) – Geração de QR Code no terminal

> Além disso, o projeto possui dois arquivos personalizados de prompt:
>
> - `prompt-qrcode`: Define perguntas para geração de QR Code  
> - `prompt-password`: Define perguntas para geração de senha

## 🚀 Como usar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo

   Instale as dependências:

 
npm install
Crie um arquivo .env na raiz do projeto com as configurações desejadas:

env

UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12
Execute o projeto com o comando:

bash

npm start
Selecione a opção desejada no menu:

1 para gerar QR Code

2 para gerar senha
