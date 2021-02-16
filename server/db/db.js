const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  password: 'sashka',
  host: 'localhost',
  port: 5432,
  database:'test'
})

module.exports = pool

