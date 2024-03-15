const express=require("express");
const router= require("express").Router();
const bcrypt=require("bcryptjs")

const User= require("../models/user");

router.use(express.json());


//sign in
router.post("/register",async(req,res)=>{
    try{

        console.log("postman entry-> ", req.body);

        const {name,email,password}= req.body;

        //checking whether user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message:`User already exists` });
        }

        const hashpassword= bcrypt.hashSync(password);
        const user=new User(
            {name,email,password:hashpassword}
        );

        const createUser= await user.save();
        return res.status(200).json({message:`New user added successfully: ${createUser}`});

    }
    catch(error){
        res.status(500).json({error: "Internal server error" });

    }
})

//log in -> using email and password
router.post("/login",async (req,res)=>{
    try{

        const user=await User.findOne({email: req.body.email});
        if(!user){
            return res.status(400).json({message:"Email Does not Exists, kindly Sign Up"});
        }

        const isPassword=bcrypt.compareSync(req.body.password, user.password);  //check password also
        if(!isPassword){
            return res.status(400).json({message:"Password Incorrrect"});

        }

        return res.status(200).json({message:`successfully logged in `});


    }
    catch(error){
        res.status(400).json({message:`${error}`});
    }

})


module.exports=router;