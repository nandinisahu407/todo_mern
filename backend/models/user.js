const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/

    },

    password:{
        type:String,
        required:true,
    },

    list:[
        {
            type: mongoose.Types.ObjectId,
            ref:"List",
        }

    ],


});

// module.exports= mongoose.Model("User",userSchema);

const User= mongoose.model("User",userSchema);
module.exports= User;