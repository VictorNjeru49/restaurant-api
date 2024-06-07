import { Hono } from "hono";
import { getaddress, getAddressController, createAddressController, updateAddressController, deleteAddressController} from "./address.controller";

export const addressRouter = new Hono();

addressRouter.get("/address", getaddress);

// get all addresses
addressRouter
    .get("address", getAddressController)
    .post("address", createAddressController)

// get address by id
addressRouter
    .get("/address/:id", getAddressController)
    .put("/address/:id", updateAddressController)
    .delete("/address/:id", deleteAddressController)
