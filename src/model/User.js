const mongoose=require('mongoose')

const users=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    pass:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mode:{
        type:String,
        required:true, 
    }
})
const Users=new mongoose.model("Users",users);
module.exports=Users;