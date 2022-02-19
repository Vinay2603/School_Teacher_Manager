const express = require("express")
const Teacher = require("../models/Teacher")
const router = express.Router();




router.get("/",async(req,res)=>{
     try{
         const teacher = await Teacher.find()
         
         return res.status(201).send(teacher)
     }catch(e){
        return res.status(401).json({message : e.message })
     }
})



router.post("/",async(req,res)=>{
    try{
       const teacher = await Teacher.create(req.body)

       return res.status(201).send(teacher)
    }catch(e){
         return res.status(401).json({message : e.message })
    }
})

module.exports = router