const express = require('express')
const { createTask, getTasks } = require('./controllers/controls.js')
const routes = express.Router()

routes.use(express.json())
routes.get('/gettask', getTasks)
routes.post('/createtask', createTask)


module.exports = routes