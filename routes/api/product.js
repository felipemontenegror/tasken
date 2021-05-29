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


//Route Post || Criar um produto 
// Acess Public
router.post('/', [
  check('id').not().isEmpty(),
  check('nomeDoProduto').not().isEmpty(),
  check('fabricante').not().isEmpty(),
  check('quantidadeDoProduto').not().isEmpty(),
  check('preco').not().isEmpty(),
], async (req, res, next) => {

  try {
    let { id, nomeDoProduto, fabricante, quantidadeDoProduto, preco } = req.body

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    } else {
      let product = new Product({ id, nomeDoProduto, fabricante, quantidadeDoProduto, preco })
      
      await product.save()

      if (product.id) {
        res.json(product)
      }
    }
  } catch (err) {
    console.log(err.message)
    res.status(500).send({ "error": MSGS.GENERIC_ERROR })
  }
})


  module.exports = router