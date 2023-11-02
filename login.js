// Importe o jQuery e o MongoClient
import MongoClient from 'mongodb';
const $ = require('jquery').$;
// const MongoClient = require('mongodb').MongoClient;

// Defina as informações de conexão com o banco de dados
const connectionString = 'mongodb+srv://root:%40Televisao123@cluster0.ai94jpm.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'petlevi';
const collectionName = 'usuarios';

// Crie um objeto MongoClient
const client = new MongoClient(connectionString);

// Conecte-se ao banco de dados
client.connect((err) => {
  if (err) {
    console.log('Erro ao conectar com o banco de dados:', err);
    return;
  }

  // Obtenha a coleção de usuários
  const collection = client.db(dbName).collection(collectionName);

  // Defina um evento de clique no botão de login
  $('#login-btn').click((e) => {
    // Obtenha os dados do formulário de login
    const username = $('#usuarioLogin').val();
    const password = $('#senhaLogin').val();

    // Execute uma consulta para encontrar o usuário
    const query = { username: username };
    const options = {
      projection: { password: 1 },
    };

    // Execute a consulta
    collection.findOne(query, options, (err, user) => {
      if (err) {
        console.log('Erro ao executar a consulta:', err);
        return;
      }

      // Verifique se o usuário foi encontrado
      if (!user) {
        // Usuário não encontrado
        alert('Usuário ou senha inválidos.');
        return;
      }

      // Verifique se a senha está correta
      if (password !== user.password) {
        // Senha incorreta
        alert('Usuário ou senha inválidos.');
        return;
      }

      // Login efetuado com sucesso
      alert('Login efetuado com sucesso!');
    });
  });

});
