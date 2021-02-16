const { DB_USER, DB_PASSWORD, DB_HOST, DB_URI, DB_PORT, DB_DATABASE } = process.env

const { Pool } = require('pg')

// const pool = new Pool({
//   user: 'postgres',
//   password: 'sashka',
//   host: 'localhost',
//   port: 5432,
//   database:'test'
// })

let connectionString = {
  connectionString: process.env.DATABASE_URL,
  // ssl: true
  }

const pool = new Pool(connectionString)
pool.on('connect', () => console.log('connected to db'));

module.exports = pool


// const { Pool } = require('pg'); 
// const secrets = require('../middleware/ENV').default;
// const env = process.env.NODE_ENV || 'development';
// let connectionString = {
//     user: secrets.user,
//     database: secrets.testDb,
//     host: secrets.host
// };
// // checking to know the environment and suitable connection string to use
// if (env === 'development') {
//     connectionString.database = secrets.database;
// } else {
//     connectionString = {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true
//     };
// };
// const pool = new Pool(connectionString);
// pool.on('connect', () => console.log('connected to db'));
