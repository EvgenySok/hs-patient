const express = require('express')
const bodyParser = require('body-parser')
const patientRouter = require('./routes/patient.router')
const PORT = process.env.PORT || 5000

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use('/api/v1', patientRouter)

// server.use('/', (req, res) => {
//   res.json({ "status": "ok" })
// })

server.listen(PORT, () => {
  console.log(`Server has been started at http://localhost:${PORT}...`)
})
