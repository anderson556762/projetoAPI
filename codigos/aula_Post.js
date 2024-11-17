Aqui está um exemplo completo de uma API que utiliza Express, Sequelize e o banco de dados PostgreSQL com suporte a CORS e uma rota POST para criação de registros:

Código:

Configuração do ambiente:

1. Certifique-se de ter os pacotes instalados:

npm install express cors sequelize pg pg-hstore dotenv


2. Crie um arquivo .env para armazenar suas variáveis de ambiente:

DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=sua_base




---

Arquivo app.js:

const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Configuração do Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

// Testando a conexão com o banco de dados
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

// Definição do modelo
const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'users',
    timestamps: true,
  }
);

// Sincronizando o modelo com o banco de dados
(async () => {
  await sequelize.sync({ alter: true });
})();

const app = express();

// Middleware
app.use(cors()); // Ativando CORS
app.use(express.json()); // Habilitando JSON no corpo da requisição

// Rota POST para criar um usuário
app.post('/users', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o usuário.' });
  }
});

// Iniciando o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


---

Funcionamento:

1. CORS ativado: Permite requisições de outras origens.


2. Sequelize configurado: Conexão com PostgreSQL.


3. Rota POST /users:

Recebe name e email no corpo da requisição.

Cria um novo usuário no banco de dados.





---

Exemplo de Requisição:

Com ferramentas como Postman ou cURL:

POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com"
}

Resposta de sucesso:

{
  "id": 1,
  "name": "João Silva",
  "email": "joao@example.com",
  "updatedAt": "2024-11-17T12:00:00.000Z",
  "createdAt": "2024-11-17T12:00:00.000Z"
}

Se precisar de algo mais específico, posso ajustar!

