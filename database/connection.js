const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbtask', 'docker', 'docker',{
    host:'localhost',
    dialect:'postgres',
})

module.exports = sequelize