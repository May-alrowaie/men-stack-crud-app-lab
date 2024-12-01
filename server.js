require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require("method-override") // new
const morgan = require("morgan")
const plantRoute = require("./routes/plants")

const app = express()
const PORT = process.env.PORT
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(morgan("dev"))

app.use(plantRoute)

const newPlant = (req, res) => {
  res.render("plants/new.ejs")
}
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`)
})
