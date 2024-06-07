import { Hono } from "hono";
import { getcategory, getcategoryController, createcategoryController, updatecategoryController, deletecategoryController} from "./categories.controller";

export const categoriesRouter = new Hono();

categoriesRouter.get("/categories", getcategory);

// get all addresses
categoriesRouter
    .get("categories", getcategoryController)
    .post("categories", createcategoryController)

// get address by id
categoriesRouter
    .get("/categories/:id", getcategoryController)
    .put("/categories/:id", updatecategoryController)
    .delete("/categories/:id", deletecategoryController)