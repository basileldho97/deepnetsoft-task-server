const express = require("express");
const MenuItem = require("../models/MenuItem");

const router = express.Router();

// Get all menu items
router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add a new menu item
router.post("/", async (req, res) => {
  try {
    const { category, name, description, price } = req.body;
    const newItem = new MenuItem({ category, name, description, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Error saving item" });
  }
});

// Get menu items by category
router.get("/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const items = await MenuItem.find({ category });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
