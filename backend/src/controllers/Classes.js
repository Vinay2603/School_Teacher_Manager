const express = require("express")
const Classes = require("../models/Classes")
const router = express.Router()




router.get("/",async(req,res)=>{
     try{
         const classes = await Classes.find({}).lean().exec()
         
         return res.status(201).send(classes)
     }catch(e){
        return res.status(401).json({message : e.message })
     }
})



router.post("/",async(req,res)=>{
    try{
       const classes = await Classes.create(req.body)

       return res.status(201).send(classes)
    }catch(e){
         return res.status(401).json({message : e.message })
    }
})

module.exports = router