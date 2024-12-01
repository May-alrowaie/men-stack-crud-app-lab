const express = require("express")
const route = express.Router()
const plantController = require("../controllers/plants")

route.get("/plants/new", plantController.newPlant)
route.post("/plants", plantController.create)
route.get("/plants", plantController.index)
route.get("/plants/:id", plantController.show)
route.delete("/plants/:id", plantController.delete)
route.get("/plants/:id/edit", plantController.edit)
module.exports = route
