require('dotenv').config();

const waitPort = require('wait-port');
const { Client } = require('pg');


const client =  new Client({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.POSTGRESS_USER || 'root',
  password: process.env.POSTGRESS_PASSWORD || 'root',
  database: process.env.DB_NAME || 'mycontacts',
});

const connectToDataBase = async () => {
  console.log(`Aguardando banco de dados em ${process.env.DB_HOST}:${process.env.DB_PORT}...`);

  const ready = await waitPort({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    timeout: 10000, // 10 segundos
    waitForDns: true,
  });

  if (!ready) {
    console.error('Banco de dados não respondeu a tempo!');
    process.exit(1);
  }

  await client.connect();
  console.log('Conectado ao banco de dados PostgreSQL.');
};

connectToDataBase();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
