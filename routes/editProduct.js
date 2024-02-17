const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const {
  renderEditProduct,
  editProduct,
} = require("../controllers/productController");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/:id", renderEditProduct);

router.post("/:id", editProduct);

module.exports = router;
