const express = require('express')
const Product = require('../../models/product.js')
const { check, validationResult } = require('express-validator')
const MSGS = require('../../messages')
const router = express.Router()


//Route GET || Buscar Todos os produtos
// Acess Public
router.get('/', async (req, res) => {
    try {
      const product = await Product.find({})
      res.json(product)
    } catch (err) {
      console.error(err.message)
      res.status(500).send({ "error" : MSGS.GENERIC_ERROR })
    }
  })

  //Route GET || Buscar produtos por ID
// Acess Public
router.get('/:id',[], async (req, res) => {
  try {
    const id = req.params.id
    const product = await Product.findOne({_id : id})
    if(product){
      res.json(product)
    } else {
        res.status(404).send({ "error" : MSGS.PRODUCT404})
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send({ "error" : MSGS.GENERIC_ERROR })
  }
})


  module.exports = router