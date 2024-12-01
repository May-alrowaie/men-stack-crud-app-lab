const mongoose = require("mongoose")

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
  isReadyToEat: Boolean,
})

const Plant = mongoose.model("Plant", plantSchema)
module.exports = Plant
