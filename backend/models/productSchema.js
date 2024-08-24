import mongoose from "mongoose";

const productschema = mongoose.Schema({
  bread: String,
  Price: String,
  imageUrl: String,
  category: String,
  color: String,
});

const productData = mongoose.model("Product", productschema);

export default productData;
