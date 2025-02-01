const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g., Drinks, Food, Brunch
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;
