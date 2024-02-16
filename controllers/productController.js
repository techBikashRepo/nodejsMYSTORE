const products = [
  { id: 1, productname: "Apple", price: 20, img: "apple.jpg" },
  { id: 2, productname: "Banana", price: 30, img: "banana.jpg" },
  { id: 3, productname: "Orange", price: 40, img: "orange.jpg" },
  { id: 4, productname: "Pineapple", price: 35, img: "pineapple.jpg" },
  { id: 5, productname: "Strawberry", price: 25, img: "strawberry.jpg" },
];
exports.renderProducts = (req, res) => {
  res.render("home", { products: products });
};
