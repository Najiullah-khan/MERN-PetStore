import productData from "../models/productSchema.js";
import mongoose from "mongoose";

export const getProductById = async (req, res) => {
  const id = req.params.id;
  const objectId = mongoose.Types.ObjectId(id); //const objectId = mongoose.Types.ObjectId(id);
  console.log("reaced");
  try {
    const ProductData = await productData.findById(objectId);
    res.json(ProductData);
  } catch (error) {
    console.log("not found any data");
  }
};

export const getDog = async (req, res) => {
  try {
    const ProductData = await productData.find({ category: "dog" });
    res.json(ProductData);
  } catch (error) {
    console.log("not found any data");
  }
};

export const getCat = async (req, res) => {
  try {
    const ProductData = await productData.find({ category: "cat" });
    res.json(ProductData);
  } catch (error) {
    console.log("not found any data");
  }
};
export const getHorse = async (req, res) => {
  try {
    const ProductData = await productData.find({ category: "horse" });
    res.json(ProductData);
  } catch (error) {
    console.log("not found any data");
  }
};
export const getBird = async (req, res) => {
  try {
    const ProductData = await productData.find({ category: "birds" });
    res.json(ProductData);
  } catch (error) {
    console.log("not found any data");
  }
};
export const getProduct = async (req, res) => {
  try {
    const ProductData = await productData.find();
    res.json(ProductData);
  } catch (error) {
    console.log("not found any data");
  }
};

export const createProduct = async (req, res) => {
  const bread = req.body.bread;
  const breadString = bread.toString();

  const price = req.body.price;
  const priceString = price.toString();
  const imageUrl = req.body.imageUrl;
  const imageUrlString = imageUrl.toString();
  const category = req.body.category;
  const categoryString = category.toString();
  const color = req.body.color;
  const colorString = color.toString();

  const model = new productData({
    bread: breadString,
    Price: priceString,
    imageUrl: imageUrlString,
    category: categoryString,
    color: colorString,
  });
  try {
    await model.save();
    res.json(model);
  } catch (error) {
    console.log("not saved");
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const objectId = mongoose.Types.ObjectId(id);
    const result = await productData.deleteOne({ _id: objectId });
    if (result.deletedCount === 1) {
      res.json({ message: "Product successfully deleted." });
    } else {
      res.json({ message: "Product not found." });
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const editProduct = async (req, res) => {
  const id = req.params.id;
  const objectId = mongoose.Types.ObjectId(id);
  const bread = req.body.bread;
  const breadString = bread.toString();

  const price = req.body.Price;
  const priceString = price.toString();
  const imageUrl = req.body.imageUrl;
  const imageUrlString = imageUrl.toString();
  const category = req.body.category;
  const categoryString = category.toString();
  const color = req.body.color;
  const colorString = color.toString();
  console.log("update")

  try {
    const updatedProduct = await productData.findByIdAndUpdate(
      objectId,
      {
        bread: breadString,
        Price: priceString,
        imageUrl: imageUrlString,
        category: categoryString,
        color: colorString,
      },
      { new: true }
    );
    res.json(updatedProduct);
    console.log("update")

  } catch (error) {
    console.log("Not updated");
  }
};
