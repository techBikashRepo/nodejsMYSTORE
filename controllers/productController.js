const Products = require("../models/products");

// const products = [
//   { id: 1, productname: "Apple", price: 20, img: "apple.jpg" },
//   { id: 2, productname: "Banana", price: 30, img: "banana.jpg" },
//   { id: 3, productname: "Orange", price: 40, img: "orange.jpg" },
//   { id: 4, productname: "Pineapple", price: 35, img: "pineapple.jpg" },
//   { id: 5, productname: "Strawberry", price: 25, img: "strawberry.jpg" },
// ];
exports.renderProducts = (req, res) => {
  Products.fetchProducts().then(([rows, fieldata]) => {
    res.render("home", { products: rows });
  });
};

exports.renderAddProduct = (req, res) => {
  res.render("add-product");
};

exports.postAddProduct = (req, res) => {
  const { productname, price, image } = req.body;
  const products = new Products(null, productname, price, image);
  products.postData().then(() => {
    res.redirect("/");
  });
};

exports.renderEditProduct = (req, res) => {
  Products.fetchProductById(req.params.id).then(
    ([[productData], fieldData]) => {
      res.render("edit-product", { product: productData });
    }
  );
};

exports.editProduct = (req, res) => {
  const { productname, price, image } = req.body;
  const id = req.params.id;
  const products = new Products(id, productname, price, image);
  products.editData().then(() => {
    res.redirect("/");
  });
};
