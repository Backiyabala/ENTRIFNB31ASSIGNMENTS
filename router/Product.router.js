const productController = require("../controller/Product.controller");
const express = require("express");
const router = express.Router();

router.get("/getProducts", productController.get_Products);
router.post("/addProduct", productController.add_Products);
router.put("/updateProduct/:id", productController.update_Product);
router.delete("/deleteProduct/:id", productController.delete_Product);

module.exports = router;