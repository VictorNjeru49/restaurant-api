import { Hono } from "hono";
import { getstate, getstateController, createstateController, updatestateController, deletestateController} from "./state.controller";

export const stateRouter = new Hono();

stateRouter.get("/state", getstate);

// get all addresses
stateRouter
    .get("state", getstateController)
    .post("state", createstateController)

// get address by id
stateRouter
    .get("/state/:id", getstateController)
    .put("/state/:id", updatestateController)
    .delete("/state/:id", deletestateController)