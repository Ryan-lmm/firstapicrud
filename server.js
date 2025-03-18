const sequelize = require('./database/connection.js')
const config = require('./database/config/config.js')
const express = require('express')
const routes = require('./routes.js')
const task = require('./database/models/task.js')
const server = express()


server.use('/tasks', routes)
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

try {
  sequelize.authenticate().then(()=>{
    console.log('conectado com sucesso')
  })

  server.listen(3030, function () {
    console.log('server on!')
  })
} catch (error) {
  console.log(error, 'não foi possivel conectar ao banco de dados')
}
