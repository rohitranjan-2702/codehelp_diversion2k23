const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const SkillSchema=new Schema({
    skill:{
        type:String,
        required:true,
    }
})
const tutorSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true,
        unique:true,
    },
    skills:[SkillSchema],
    education:{
        type:String,
        required:true,
    }    
},{ timeStamps: true }
)

module.exports = mongoose.model("tutor", tutorSchema);