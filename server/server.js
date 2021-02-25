const express = require('express')
const bodyParser = require('body-parser')
const patientRouter = require('./routes/patient.router')
const db = require('./db')

const { resolve } = require('path')

require('dotenv').config()
const PORT = process.env.PORT || 5000

// console.log('db:', db)
db.connect()
const server = express()

server.use(express.static(resolve(__dirname, '../dist')))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use('/api/v1', patientRouter)

server.listen(PORT, () => {
  console.log(`Server has been started at http://localhost:${PORT}...`)
})
