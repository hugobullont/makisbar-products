const Product = require('../models/product.models.js');

//Create a Product
exports.addOne = function(req,res){
  console.log('POST /api/v1/product');
  var data = {
      name: req.body.name,
      stock: req.body.stock,
      type: req.body.type
  }  

  var prod = new Product(data);

  prod.save()
  .then(d => {
    res.send(d);
  }).catch(err =>{
      res.status(500).send({
          message: err.message || "Error ocurred while creating the Product"
      });
  });
}

exports.findAll = (req,res) => {
    console.log('GET /api/v1/products');
    Product.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error ocurred while retrieving products"
        });
    });
}

exports.getByName = (req,res) => {
    console.log('GET /api/v1/product/NAME');
    const getName = req.params.name;
    Product.find({name: getName})
    .then(product => {
        if(!product){
            return res.status(404).send({
                message: err.message || "Product Not Found"
            });
        }
        res.send(product);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error ocurred while retrieving products"
        });
    });
}

exports.deleteProduct = function(req,res){
    Product.remove({
        '_id':req.params.id
    }, function(error){
        if(error){
            console.log(error);
        } else {
            res.send('Product Deleted.')
        }
    });
}