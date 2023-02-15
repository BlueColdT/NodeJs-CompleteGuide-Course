const fs = require('fs')
const path = require('path')
const rootFolder =  require('../util/path')
const p = path.join(
  rootFolder,
  'data',
  'products.json'
);

const WriteProductsOnFile = (products) => {
  fs.writeFile(p, JSON.stringify(products), (err) => { 
    console.log(err);
  })
}

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if(err){
      return cb([])
    }
    cb(JSON.parse(fileContent))
  })
}
class Product {

  constructor(t){
    this.title = t;
  }

  save(){
    getProductsFromFile((products) => {
      products.push(this)
      WriteProductsOnFile(products)
    })
  }

  static fetchAll(cb){
    getProductsFromFile(cb)
  }
}

module.exports = Product