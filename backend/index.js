import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import addProducts from "./routers/addProducts.js";
import productData from "./models/productSchema.js";

const app = express();
const url =
  "mongodb+srv://najiullah:12345@cluster0.cohafxw.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database is connected"));
app.listen(5000);

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/addProduct", addProducts);
app.use("/viewProduct", addProducts);
app.use("/deleteProduct", addProducts);
app.use("/editProduct", addProducts);