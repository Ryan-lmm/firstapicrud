const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('dbtask', 'docker', 'docker', {
  host: 'localhost',
  dialect: 'postgres'
})

class Task extends Model { }

Task.init(
  {
    taskname: {
      type: DataTypes.STRING
    },

    deadline: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    modelName: 'Task'
  }
);
console.log(Task === sequelize.models.Task);

module.exports = Task