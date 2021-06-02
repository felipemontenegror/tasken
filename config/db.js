const Sequelize = require('sequelize')
const sequelize = new Sequelize('product', 'root', 'crafterjr88', {dialect: 'mysql', host: 'localhost'})
 
module.exports = sequelize