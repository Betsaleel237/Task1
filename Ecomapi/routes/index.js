import { Router } from "express";

import {
    createProduct,
    deleteProduct,
    updateProduct,
    getProduct,
    getAllProducts
} from "../handlers/index.js"

const appRouter= Router();

appRouter.get("/",getAllProducts);
appRouter.get("/:id",getProduct);
appRouter.post("/create",createProduct);
appRouter.put("/update/:id",updateProduct);
appRouter.delete("/delete/:id",deleteProduct);


export default appRouter;