const router = require("express").Router();
const Product = require("../models/Product");

//Create Product
router.post("/create", async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      weight: req.body.weight,
      proteins: req.body.proteins,
      fats: req.body.fats,
      carbohydrates: req.body.carbohydrates,
      calories: req.body.calories,
    });
    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

//Get product by id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
