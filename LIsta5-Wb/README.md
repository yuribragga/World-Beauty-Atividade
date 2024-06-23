#⚡️ WB - Grupo World Beauty
Bem-vindo ao repositório do projeto WB! Este é um sistema de gerenciamento desenvolvido para gerenciar um grupo com um modelo de negócios focado em pequenas unidades espalhadas por várias cidades do país. O projeto foi desenvolvido em várias iterações.

# 📊 Descrição do Projeto
WB é um sistema abrangente projetado para ajudar o Grupo World Beauty a organizar e gerenciar suas pequenas unidades espalhadas por várias cidades do país. Ele abrange desde o gerenciamento de produtos e serviços até o gerenciamento de clientes.

# 💻 Como Executar
Certifique-se de ter o ambiente de desenvolvimento configurado corretamente. Siga os passos abaixo para executar o projeto:


### Back-end


# Na pasta backend use o comando para instalar todas as dep
npm install


# Iniciando o prisma
npx prisma migrate dev --name init

# Após a inicialização do prisma é necessário abrir o Mysql Workbench e executar os sqls de insert
# Caminho para a pasta com os inserts: /back/src/db

# Executando o back-end
npm run dev

### Front-end

# Na pasta do frontend
# Instale as dependências
npm install

# Executando o front-end
npm start
