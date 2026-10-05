const productsModel = require("../model/Product.model");

const get_Products = (req, res) => {
    if (productsModel.length == 0) {
       return res.json({message:"product data not available"})
    }
    return res.json(productsModel);
}

const add_Products = (req, res) => {
    const { productId, productName, description, Stock } = req.body;//input

    if (productName == "" || description == "" || Stock == "") {
        return res.json({ message: "product data not addedd" })
    }
    const data = {
        productId,
        productName,
        description,
        Stock
    }
    productsModel.push(data);
    return res.json({ message: "product added successfully", productsModel })

};

const update_Product = (req, res) => {
    const id = req.params.id;
    const searchProduct = productsModel.find((data) => data.productId == id);
    const { productId, productName, description, Stock } = req.body
    if (!searchProduct) {
        return res.status(404).json({ message: "product details not found" })
    }

    searchProduct.productId = productId || searchProduct.productId;
    searchProduct.productName = productName || searchProduct.productName;
    searchProduct.description = description || searchProduct.description;
    searchProduct.Stock = Stock || searchProduct.Stock;

    return res.status(201).json({ message: "patient details update", productsModel })

}

const delete_Product = (req, res) => {
    const id = req.params.id;
    const Product = productsModel.findIndex((data) => data.productId == id);
    if (Product == -1) {
        // console.log(Product);
        return res.status(404).json({ message: "product details not found" })
    }

    productsModel.splice(Product,1);
    return res.status(201).json({ message: "product details removed", productsModel })

}


module.exports = { get_Products, add_Products, update_Product, delete_Product };