const express = require("express");
const app = express();
app.use(express.json());

const productRouter = require("./router/Product.router");
app.use(productRouter);

const port = 8080;
app.listen(port, () => {
    console.log(`port number-${port} server running successfully`);
})