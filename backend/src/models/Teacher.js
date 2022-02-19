const mongoose = require("mongoose")

const teacherSchema = new  mongoose.Schema({
     Name:{ type:String, require:true},
     Gender :{ type:String, require:true},
      Age :{ type:Number, require:true},
      Classes :[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Classes",
        required:false
      }]
},{
    versionKey: false,
    timestamps: true
})


const Teacher = mongoose.model("teacher", teacherSchema)


module.exports = Teacher