const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect } = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post('/', protect, async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const product = new Product({
      name,
      description,
      price,
      user: req.user._id,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: 'Product creation failed' });
  }
});

module.exports = router;