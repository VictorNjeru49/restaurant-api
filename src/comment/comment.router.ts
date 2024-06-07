import { Hono } from "hono";
import { getcomment, getcommentController, createcommentController, updatecommentController, deletecommentController} from "./comment.controller";

export const commentRouter = new Hono();

commentRouter.get("/comment", getcomment);

// get all addresses
commentRouter
    .get("comment", getcommentController)
    .post("comment", createcommentController,)

// get address by id
commentRouter
    .get("/comment/:id", getcommentController)
    .put("/comment/:id", updatecommentController)
    .delete("/comment/:id", deletecommentController)