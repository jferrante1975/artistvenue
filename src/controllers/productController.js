const path = require("path");
const fs   = require('fs');


const productsFilePath = path.join(__dirname, '../data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
  products: (req, res) => {

    const categoria = req.query.categoria;

    let producto = {};

    if (categoria != null) {
       producto = products.filter(producto => {
          if (producto.categoria != null && producto.video != null){
              return producto.categoria.toLowerCase() == categoria;
          }
      } )    
    }
    else {
      producto = products;
    }
    
    res.render(path.join(__dirname, "../views/products/products.ejs"),{producto}); 

  },

  detail: (req, res) => {

    const productId = req.params.id;
    
    let producto = products.find(producto => {
      return producto.id == productId;
    })

    res.render(path.join(__dirname, "../views/products/productDetail.ejs"),{producto}); 
    
  },
  cart: (req, res) => {
    res.render(path.join(__dirname, "../views/products/cart.ejs"));
  }
};

module.exports = productController;
