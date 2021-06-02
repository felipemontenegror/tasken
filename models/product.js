const Sequelize = require('sequelize')
const database = require('../config/db')
 
const Product = database.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeDoProduto: {
        type: Sequelize.STRING,
        allowNull: false
    },

    fabricante: {
        type: Sequelize.STRING,
        allowNull: false
    },

    quantidadeDoProduto: {
        type: Sequelize.INTEGER
    },

    preco: {
        type: Sequelize.DECIMAL
    },
    descricao: Sequelize.STRING
})
 
module.exports = Product


