const express = require('express');
const cors = require('cors');
const db = require('./models'); // Importa os modelos e o Sequelize

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rota POST para criar um usuário
app.post('/users', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = await db.User.create({ name, email }); // Usa o modelo importado
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o usuário.' });
  }
});

// Sincronizando o banco de dados (apenas para testes)
(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    await db.sequelize.sync({ alter: true }); // Para sincronizar no ambiente de desenvolvimento
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

// Iniciando o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});