const Sequelize = require('sequelize')
const database = require('../config/db')
 
const Product = database.sequelize.define('dbproduct', {
    id: {
        type: database.Sequelize.INTEGER,
        //autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeDoProduto: {
        type: database.Sequelize.STRING,
        allowNull: false
    },

    fabricante: {
        type: database.Sequelize.STRING,
        allowNull: false
    },

    quantidadeDoProduto: {
        type: database.Sequelize.INTEGER
    },

    preco: {
        type: database.Sequelize.DECIMAL
    },
    descricao: Sequelize.STRING
})
 
module.exports = Product


