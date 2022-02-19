const express = require("express")
const mongoose = require("mongoose")
const connect = require("./configs/db")

const teacherController = require("./controllers/Teacher")
const classesController = require("./controllers/Classes")

const app = express()
app.use(express.json())

app.use("/classes", classesController)
app.use("/teacher" , teacherController)

app.listen(1234,async()=>{
    await connect()
    console.log("listing on the port 1234")
})