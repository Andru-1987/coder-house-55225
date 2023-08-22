// importar el modelo
// leer el json de productos
// insert o importar el json en mongo

/// operaciones con mongo

const fs = require('fs/promises')
const path = require('path')
const mongoose = require('mongoose')
const { MONGO_URL } = require('../config/config.passwords.js')

const productModel = require('../models/product.model')

async function seed() {
  await mongoose.connect(MONGO_URL)

  const filepath = path.join(__dirname, '../', 'data/productos.json')
  const data = await fs.readFile(filepath, 'utf-8')
  const products = JSON.parse(data).map(({ id, ...product }) => product)

  const result = await productModel.insertMany(products)

  console.log(result)

  await mongoose.disconnect()
}

seed()