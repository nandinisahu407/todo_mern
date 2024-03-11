const express= require("express");
const router= express.Router();

const User=require("../models/user");
const List=require("../models/list");

router.use(express.json());

//add
router.post("/addTask", async(req,res)=>{
    try{
        //first check user exists or not
        const {title,body,email}=req.body;
        const existingUser= await User.findOne({email});

        if(existingUser){
            const list=new List({title,body,user:existingUser});
            await list.save().then(()=>{
                res.status(200).json({list});
            })

            existingUser.list.push(list);
            existingUser.save()
        }
        else{
            res.status(404).json({message:"User not found"});
        }
    }
    catch(error){
        console.log("error: ",error);
        res.status(400).json({message: `Error Occured : ${error}`});

    }

})

//update
router.put("/updateTask/:id",async(req,res)=>{
    try {
        
        const {title,body,email}=req.body;
        const existingUser=await User.findOne({email});

        if(existingUser){
            const updatedList= await List.findByIdAndUpdate(req.params.id, {title,body});
            updatedList.save().then(()=>{
                res.status(200).json({message: `Task Updated: ${updatedList}`});
            })

        }
        else{
            res.status(404).json({message:"User not found"});
        }

    } catch (error) {
        console.log(error);
        
    }
})

//delete
router.delete("/deleteTask/:id",async(req,res)=>{
    try {

        const {email}=req.body;
        const existingUser= await User.findOne({email});

        if(existingUser){

            const list=await List.findById(req.params.id);
            if(!list){
                return res.status(404).json({message:"Task not found"});
            }

            //deleting from user list
            await User.findOneAndUpdate({email},{$pull:{list:req.params.id}});

            // deleting list
            await List.findByIdAndDelete(req.params.id).then(()=>{
                    return res.status(200).json({message:"Task deleted Successfully"});

            })


        }

       
        else{
            res.status(404).json({message:"User not found"});
        }

    } catch (error) {
        console.log(error)
        
    }

})

//get task of a particular user-> user id
router.get("/getTasks/:id",async(req,res)=>{
    const existingUser=await User.findById(req.params.id);  //checking valid user or not

    const allTasks=await List.find({user:req.params.id});
    if(existingUser){
        if(allTasks.length!=0){
            return  res.status(200).json({allTasks});
        }

        return res.status(200).json({message:"No Tasks"});
    }
    else{
        res.status(404).json({message:"User invalid"});
    }
})


//all users tasks
router.get("/allTasks",async(req,res)=>{
    const allList=await List.find();
    res.status(200).json({message:allList});

})


module.exports=router;