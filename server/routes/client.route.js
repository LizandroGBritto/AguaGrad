const express = require("express");
const {authenticate} = require("../config/jwt.config");

const ClientController = require("../controllers/client.controller");
const ClientRouter = express.Router();

ClientRouter.get("/", authenticate, ClientController.getAllClients);

ClientRouter.get("/:id", authenticate, ClientController.getOneClient);

ClientRouter.post("/new", ClientController.createClient);

ClientRouter.put("/:id", authenticate, ClientController.updateOneClientById);

ClientRouter.delete("/:id", authenticate, ClientController.deleteOneClientById);

module.exports = ClientRouter;