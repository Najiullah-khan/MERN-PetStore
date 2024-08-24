import express from "express";
import { createProduct, getDog ,getCat,getBird,getHorse,deleteProduct,getProduct,editProduct,getProductById} from "../controllers/addProducts.js";

const router = express.Router();
//get,post,put,delete
router.get("/Dog", getDog);
router.post("/", createProduct);
router.get("/Cat", getCat)
router.get("/Birds",getBird)
router.get("/Horse", getHorse)
router.get("/Product", getProduct)
router.get("/:id", getProductById)



router.delete("/:id", deleteProduct);
router.put("/:id", editProduct);

export default router;
