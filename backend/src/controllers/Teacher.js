const express = require("express")
const Teacher = require("../models/Teacher")
const router = express.Router();




router.get("/",async(req,res)=>{
     try{
         const page = +req.query.page || 1;
         const size = +req.query.size || 4;

         const skip =(page -1 )*size


         const teacher = await Teacher.find().skip(skip).limit(size).populate("classes").lean().exec()
         
         const totalPages = Math.ceil((await Teacher.find().countDocuments())/size)

         return res.status(201).json({teacher,totalPages})
     }catch(e){
        return res.status(401).json({message : e.message })
     }
})

router.get("/sort",async(req,res)=>{
    try{
        const page = +req.query.page || 1;
         const size = +req.query.size || 4;

         const skip =(page -1 )*size

        const teacher = await Teacher.find().sort({Age:1}).skip(skip).limit(size).populate("classes").lean().exec()
        
        const totalPages = Math.ceil((await Teacher.find().countDocuments())/size)

        return res.status(201).json({teacher,totalPages})
    }catch(e){
       return res.status(401).json({message : e.message })
    }
})

router.get("/male",async(req,res)=>{
    try{
        const teacher = await Teacher.find({"Gender":{$eq : "Male"}}).populate("classes").lean().exec()
        
        return res.status(201).send(teacher)
    }catch(e){
       return res.status(401).json({message : e.message })
    }
})

router.get("/female",async(req,res)=>{
    try{
        const teacher = await Teacher.find({"Gender":{$eq : "Female" }}).populate("classes").lean().exec()
        
        return res.status(201).send(teacher)
    }catch(e){
       return res.status(401).json({message : e.message })
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const teacher = await Teacher.find({_id:req.params.id}).populate("classes").lean().exec()
        
        return res.status(201).send(teacher)
    }catch(e){
       return res.status(401).json({message : e.message })
    }
})

router.get("/name/:Name",async(req,res)=>{
    try{
        const size = +req.query.size || 4;

        const teacher = await Teacher.find({Name:req.params.Name}).populate("classes").lean().exec()
          const totalPages = Math.ceil((await Teacher.find().countDocuments())/size)
        return res.status(201).send({teacher,totalPages})
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