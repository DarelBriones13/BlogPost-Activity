const express = require("express")

const routes = express.Router()

routes.get("/home", (req,res) => {
    res.send("Welcome!")
})

routes.get("/about", (req,res) => {
    res.send("Welcome About!")
})

routes.get("/contact", (req,res) => {
    res.send("Welcome Contact!")
})

module.exports = routes