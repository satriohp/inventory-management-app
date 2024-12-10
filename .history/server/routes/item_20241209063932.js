const ItemRoutes = require("express").Router();
const ItemController = require("../controllers/ItemController");

ItemRoutes.get("/", ItemController.getItems);
ItemRoutes.post("/", ItemController.add);
ItemRoutes.delete("/:id", ItemController.delete);
ItemRoutes.put("/:id", ItemController.update);

module.exports = ItemRoutes;
