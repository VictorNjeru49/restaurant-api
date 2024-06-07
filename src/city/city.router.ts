import { Hono } from "hono";
import { getcity, getcityController, createcityController, updatecityController, deletecityController } from "./city.controller";

export const cityRouter = new Hono();

cityRouter.get("/city", getcity);

// get all addresses
cityRouter
    .get("city", getcityController)
    .post("city", createcityController)

// get address by id
cityRouter
    .get("/city/:id", getcityController)
    .put("/city/:id", updatecityController)
    .delete("/city/:id", deletecityController)