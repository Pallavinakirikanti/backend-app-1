const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// create order
router.post("/", async (req, res) => {
  try {
    const order = new Order({
      items: req.body.items,
      total: req.body.total
    });

    await order.save();
    res.json(order);

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;