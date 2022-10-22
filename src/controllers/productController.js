const path = require("path");
const fs = require("fs");

const productsFilePath = path.join(__dirname, "../data/productDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productController = {
  products: (req, res) => {
    const categoria = req.query.categoria;

    let producto = {};

    if (categoria != null) {
      producto = products.filter((producto) => {
        if (producto.categoria != null && producto.video != null) {
          return producto.categoria.toLowerCase() == categoria;
        }
      });
    } else {
      producto = products;
    }
    
    res.locals.title = "Products"; 
    res.render(path.join(__dirname, "../views/products/products.ejs"), {
      producto,
    });
  },

  detail: (req, res) => {
    const productId = req.params.id;

    let producto = products.find((producto) => {
      return producto.id == productId;
    });

    res.locals.title = "Product Detail"; 
    res.render(path.join(__dirname, "../views/products/productDetail.ejs"), {
      producto
    });
  },
  cart: (req, res) => {
    res.locals.title = "Cart"; 
    res.render(path.join(__dirname, "../views/products/cart.ejs"));
  },

  search: (req, res) => {

    const filtro = req.query.keywords.toLowerCase();

    console.log(filtro);
    let producto = products.filter( producto => { 
            return producto.nombre.toLowerCase().includes(filtro) 
    })

    res.render(path.join(__dirname, "../views/products/products.ejs"),{producto}); 

  } 
};

module.exports = productController;
