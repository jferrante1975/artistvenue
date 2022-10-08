const path = require("path");
const fs   = require('fs');


const productsFilePath = path.join(__dirname, '../data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
  products: (req, res) => {

    const categoria = req.query.categoria;

    let producto = products.filter(producto => {
        if (producto.categoria != null && producto.video != null){
            return producto.categoria.toLowerCase() == categoria;
        }
    } )    
    
    res.render(path.join(__dirname, "../views/products/products.ejs"),{producto}); 

  },
  detail: (req, res) => {
    res.render('products/productDetail');
  }
};

module.exports = productController;
