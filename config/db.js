const Sequelize = require('sequelize')
const sequelize = new Sequelize('dbproduct', 'root', 'crafterjr88', {dialect: 'mysql', host: 'localhost'})
 
module.exports = sequelize