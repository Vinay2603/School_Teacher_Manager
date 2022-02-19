const mongoose = require("mongoose")

const classesSchema = new mongoose.Schema({
    Grade:{ type:String, require:true},
    Section:{ type:String, require:true},
    Subject :{ type:String, require:true},
},{
    versionKey:false,
    timestamps: true
}) 


const Classes = mongoose.model("classes" , classesSchema)

module.exports = Classes