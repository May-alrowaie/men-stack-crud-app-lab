const Plant = require("../models/plant")

const newPlant = (req, res) => {
  res.render("plants/new.ejs")
}

const create = async (req, res) => {
  if (req.body.isReadyToEat == "on") {
    req.body.isReadyToEat = true
  } else {
    req.body.isReadyToEat = false
  }
  await Plant.create(req.body)
  res.redirect("/plants/new")
}

const index = async (req, res) => {
  const plants = await Plant.find()
  res.render("plants/index.ejs", { plants })
}

const show = async (req, res) => {
  const id = req.params.id
  const plant = await Plant.findById(id)
  res.render("plants/show.ejs", { plant })
}
const deletePlant = async (req, res) => {
  const id = req.params.id
  await Plant.findByIdAndDelete(id)
  res.redirect("/plants")
}
const edit = async (req, res) => {
  const id = req.params.id
  const plant = await Plant.findById(id)
  res.render("plants/edit.ejs", { plant })
}
module.exports = {
  newPlant,
  create,
  index,
  show,
  delete: deletePlant,
  edit,
}
