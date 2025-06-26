import express from "express";
const productRouter = express.Router();
import { products } from "../data.js";

productRouter.get("/product", (req, res) => {
  res.json(products);
});

productRouter.get("/product/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((prod) => prod.id === productId);
  if (!product) {
    res.status(404).json({ message: "product not found" });
  }
  res.json(product);
});

export { productRouter };
