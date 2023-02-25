const mongoose=require('mongoose');
const Schema =mongoose.Schema;

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
    },
    skills:{
        type:String,
        required:true,
    },
    education:{
        type:String,
        required:true,
    }
},{ timeStamps: true }
)

module.exports = mongoose.model("tutors", tutorSchema);