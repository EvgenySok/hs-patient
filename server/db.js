require('dotenv').config()
const { Client } = require('pg');
// const env = process.env.NODE_ENV || 'development'
// let connectionString = {}
// if (env === 'development') {
//   connectionString = {
//     user: 'postgres',
//     password: 'sashka',
//     host: 'localhost',
//     port: 5432,
//     database: 'test'
//   }
// } else {
// connectionString = {
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// }
// }

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})
client.on('connect', () => console.log('connected to db'));

module.exports = client
