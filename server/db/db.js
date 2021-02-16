const { DB_USER, DB_PASSWORD, DB_HOST, DB_URI, DB_PORT, DB_DATABASE } = process.env

const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  password: 'sashka',
  host: 'localhost',
  port: 5432,
  database:'test'
})

// const pool = new Pool({
//   user: DB_USER,
//   password: DB_PASSWORD,
//   host: DB_HOST,
//   port: DB_PORT,
//   database: DB_DATABASE
// })

module.exports = pool

