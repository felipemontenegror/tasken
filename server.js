const express = require('express')
var cors = require('cors')
const app = express()
const Sequelize = require('sequelize')
const PORT = process.env.PORT || 3000


//db
const sequelize = new Sequelize('dbproduct', 'root', 'crafterjr88', {
    host: 'localhost',
    dialect: 'mysql'
})







// Middleware
app.use(cors())
app.use(express.json())  //chamada BodyParser atualizada na versão 4 do node
app.use(express.urlencoded({ extended: true }));



//rotas de endpoint
app.use('/product', require('./routes/api/product'))

app.get('/', (req, res) => res.send('Server Hello'))

app.listen(PORT, () => { 
    console.log(`port ${PORT}`)})