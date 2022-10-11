const path = require("path");
const fs   = require('fs');


const productsFilePath = path.join(__dirname, '../data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
  products: (req, res) => {

    const categoria = req.query.categoria;

    console.log(categoria);

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
    res.render('products/productDetail');
  },

  cart: (req, res) => {
    res.render('products/cart');
  }
};

module.exports = productController;
