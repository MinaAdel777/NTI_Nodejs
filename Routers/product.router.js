const express = require("express");
const router = express.Router();
const productController = require("../Controllers/product.controller");
const upload = require("../config/multerConfig");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post(
  "/",
  upload.single("productImage"),
  productController.createProduct
);

module.exports = router;
