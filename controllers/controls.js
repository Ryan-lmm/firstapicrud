const task = require('../database/models/task.js')
const uuid = require('crypto')

const getTasks = async (req, res) => {
  const search = await task.findAll()
  res.send(search)
  
}

const createTask = async(req, res) => {
  const taskToCreate ={
    
    taskname:req.body.taskname,
    deadline:req.body.deadline,
  }
const nTask = await task.create(taskToCreate)
res.status(201)
res.send(nTask)
}
exports.getTasks = getTasks
exports.createTask = createTask