const { Client } = require('pg'); // Conectar o Postgres ao node

const client = new Client({
  host: 'localhost', // host e port --> dados de conexão
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts', // user, password e database --> dados de acesso
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);

  return rows;
};

// Usa-se esta função para executar as querys de dentro do banco de dados
