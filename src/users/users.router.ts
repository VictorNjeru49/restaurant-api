import { Hono } from "hono";
import { userstate, getuserController, createuserController, updateuserController, deleteuserController} from "./users.controller";

export const userRouter = new Hono();

userRouter.get("/users", userstate);

// get all addresses
userRouter
    .get("users", getuserController)
    .post("users", createuserController)

// get address by id
userRouter
    .get("/users/:id", getuserController)
    .put("/users/:id", updateuserController)
    .delete("/users/:id", deleteuserController)